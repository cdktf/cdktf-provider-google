// https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineApplicationUrlDispatchRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}
  */
  readonly project?: string;
  /**
  * dispatch_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}
  */
  readonly dispatchRules: AppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}
  */
  readonly timeouts?: AppEngineApplicationUrlDispatchRulesTimeouts;
}
export interface AppEngineApplicationUrlDispatchRulesDispatchRules {
  /**
  * Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#domain AppEngineApplicationUrlDispatchRules#domain}
  */
  readonly domain?: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#path AppEngineApplicationUrlDispatchRules#path}
  */
  readonly path: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#service AppEngineApplicationUrlDispatchRules#service}
  */
  readonly service: string;
}

export function appEngineApplicationUrlDispatchRulesDispatchRulesToTerraform(struct?: AppEngineApplicationUrlDispatchRulesDispatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export interface AppEngineApplicationUrlDispatchRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}
  */
  readonly update?: string;
}

export function appEngineApplicationUrlDispatchRulesTimeoutsToTerraform(struct?: AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference | AppEngineApplicationUrlDispatchRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppEngineApplicationUrlDispatchRulesTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineApplicationUrlDispatchRulesTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}
*/
export class AppEngineApplicationUrlDispatchRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_app_engine_application_url_dispatch_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineApplicationUrlDispatchRulesConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineApplicationUrlDispatchRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application_url_dispatch_rules',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._dispatchRules = config.dispatchRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // dispatch_rules - computed: false, optional: false, required: true
  private _dispatchRules?: AppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable; 
  public get dispatchRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dispatch_rules');
  }
  public set dispatchRules(value: AppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable) {
    this._dispatchRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRulesInput() {
    return this._dispatchRules;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppEngineApplicationUrlDispatchRulesTimeouts) {
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
      project: cdktf.stringToTerraform(this._project),
      dispatch_rules: cdktf.listMapper(appEngineApplicationUrlDispatchRulesDispatchRulesToTerraform)(this._dispatchRules),
      timeouts: appEngineApplicationUrlDispatchRulesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
