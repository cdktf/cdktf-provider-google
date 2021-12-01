// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Service Perimeter to add this resource to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html#perimeter_name AccessContextManagerServicePerimeterResource#perimeter_name}
  */
  readonly perimeterName: string;
  /**
  * A GCP resource that is inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html#resource AccessContextManagerServicePerimeterResource#resource}
  */
  readonly resource: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html#timeouts AccessContextManagerServicePerimeterResource#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimeterResourceTimeouts;
}
export interface AccessContextManagerServicePerimeterResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html#create AccessContextManagerServicePerimeterResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html#delete AccessContextManagerServicePerimeterResource#delete}
  */
  readonly delete?: string;
}

export function accessContextManagerServicePerimeterResourceTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterResourceTimeoutsOutputReference | AccessContextManagerServicePerimeterResourceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class AccessContextManagerServicePerimeterResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AccessContextManagerServicePerimeterResourceTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterResourceTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html google_access_context_manager_service_perimeter_resource}
*/
export class AccessContextManagerServicePerimeterResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_access_context_manager_service_perimeter_resource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html google_access_context_manager_service_perimeter_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimeterResourceConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter_resource',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._perimeterName = config.perimeterName;
    this._resource = config.resource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // perimeter_name - computed: false, optional: false, required: true
  private _perimeterName?: string; 
  public get perimeterName() {
    return this.getStringAttribute('perimeter_name');
  }
  public set perimeterName(value: string) {
    this._perimeterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterNameInput() {
    return this._perimeterName;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerServicePerimeterResourceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerServicePerimeterResourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      perimeter_name: cdktf.stringToTerraform(this._perimeterName),
      resource: cdktf.stringToTerraform(this._resource),
      timeouts: accessContextManagerServicePerimeterResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
