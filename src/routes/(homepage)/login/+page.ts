import type { PageLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async (event) => {
    try {
        const { session } = await getSupabase(event);
        
        // Wait for session data to be available before rendering
        if (!session) {
            throw redirect(303, '/login');
        }

        // Continue loading other data or components...

        // Redirect if needed
        if (session) {
            throw redirect(303, '/app');
        }
    } catch (error) {
        // Handle any errors
        console.error('Error loading page:', error);
        throw error; // Rethrow the error if necessary
    }
};
