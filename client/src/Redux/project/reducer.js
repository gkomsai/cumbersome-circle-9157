import * as types from "./actionTypes";


const initialState = {
    projectData:[],
    getProject:{
        isLoading:false,
        isError:false
    },
    addProject:{
        isLoading:false,
        isError:false
    },
    updateProject:{
        isLoading:false,
        isError:false
    },
    deleteProject:{
        isLoading:false,
        isError:false
    }
   
}

export const ProjectReducer = (state=initialState,  {type,payload}) => {

    switch(type){
        case types.GET_PROJECT_REQUEST:{
            return {
                ...state,
                getProject :{
                    isLoading:true,
                    isError:false,
                }
            }
        }

        case types.GET_PROJECT_SUCCESS:{
            return {
                ...state,
                projectData:payload,
                getProject :{
                    isLoading:false,
                    isError:false,
                }
            }
        }

        case types.GET_PROJECT_FAILURE:{
            return {
                ...state,
                getProject :{
                    isLoading:false,
                    isError:true,
                }
            }
        }
        
        case types.ADD_PROJECT_REQUEST:{
            return{
                ...state,
                addProject:{
                    isLoading:true,
                    isError:false
                }
            }
        }

        case types.ADD_PROJECT_FAILURE:{
            return{
                ...state,
                addProject:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.ADD_PROJECT_SUCCESS:{
            return{
                ...state,
                addProject:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.UPDATE_PROJECT_REQUEST:{
            return{
                ...state,
                updateProject:{
                    isLoading:true,
                    isError:false
                }
            }
        }

        case types.UPDATE_PROJECT_SUCCESS:{
            return{
                ...state,
                updateProject:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.UPDATE_PROJECT_FAILURE:{
            return{
                ...state,
                updateProject:{
                    isLoading:false,
                    isError:true
                }
            }
        }

        case types.DELETE_PROJECT_REQUEST:{
            return{
                ...state,
                deleteProject:{
                    isLoading:true,
                    isError:false
                }
            }
        }

        case types.DELETE_PROJECT_SUCCESS:{
            return{
                ...state,
                deleteProject:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.DELETE_PROJECT_FAILURE:{
            return{
                ...state,
                deleteProject:{
                    isLoading:false,
                    isError:true
                }
            }
        }
        default :{
            return state
        }
    };
};

