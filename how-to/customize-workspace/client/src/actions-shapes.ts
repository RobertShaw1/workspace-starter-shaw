import type {
	CustomActionCallerType,
	CustomActionsMap,
	ToolbarButton,
	WorkspacePlatformModule
} from "@openfin/workspace-platform";
import type { ModuleImplementation, ModuleList } from "./module-shapes";
import type { ManifestType } from "./shapes";

export interface ActionHelpers {
	updateToolbarButtons: (
		buttons: ToolbarButton[],
		buttonId: string,
		replacementButtonId: string
	) => Promise<ToolbarButton[]>;
	manifestTypes: { [id: string]: ManifestType };

	// This is temporary until we have a version of core definitions with just types
	// otherwise a module will bring in the whole of workspace module
	callerTypes: {
		[CustomActionCallerType.API]: CustomActionCallerType.API;
		[CustomActionCallerType.CustomButton]: CustomActionCallerType.CustomButton;
		[CustomActionCallerType.CustomDropdownItem]: CustomActionCallerType.CustomDropdownItem;
		[CustomActionCallerType.GlobalContextMenu]: CustomActionCallerType.GlobalContextMenu;
		[CustomActionCallerType.PageTabContextMenu]: CustomActionCallerType.PageTabContextMenu;
		[CustomActionCallerType.SaveButtonContextMenu]: CustomActionCallerType.SaveButtonContextMenu;
		[CustomActionCallerType.ViewTabContextMenu]: CustomActionCallerType.ViewTabContextMenu;
	};
}

export interface Actions extends ModuleImplementation<ActionHelpers> {
	/**
	 * Get the actions from the module.
	 * @param platform The platform module.
	 */
	get(platform: WorkspacePlatformModule): Promise<CustomActionsMap>;
}

export type ActionsProviderOptions = ModuleList;
