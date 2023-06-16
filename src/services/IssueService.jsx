import Request from '../utils/Request';
export const GetIssuesService = async () => {
    try {
        const respone = await Request({
            method: "get",
            url: "course/all",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
export const GetIssueService = async (idUser) => {
    try {
        const respone = await Request({
            method: "get",
            url: `issue/report?idUser=${idUser}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
export const CreateIssueService = async (data) => {
    try {
        const respone = await Request({
            method: "post",
            url: "account/add",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
export const EditIssueService = async (data) => {
    try {
        const respone = await Request({
            method: "put",
            url: "account/edit",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
export const DeleteIssueService = async (id) => {
    try {
        const respone = await Request({
            method: "delete",
            url: "account/delete",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(id),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
