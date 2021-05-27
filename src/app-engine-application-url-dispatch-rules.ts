// https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineApplicationUrlDispatchRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#project AppEngineApplicationUrlDispatchRules#project}
  */
  readonly project?: string;
  /**
  * dispatch_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}
  */
  readonly dispatchRules: AppEngineApplicationUrlDispatchRulesDispatchRules[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#timeouts AppEngineApplicationUrlDispatchRules#timeouts}
  */
  readonly timeouts?: AppEngineApplicationUrlDispatchRulesTimeouts;
}
export interface AppEngineApplicationUrlDispatchRulesDispatchRules {
  /**
  * Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#domain AppEngineApplicationUrlDispatchRules#domain}
  */
  readonly domain?: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#path AppEngineApplicationUrlDispatchRules#path}
  */
  readonly path: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#service AppEngineApplicationUrlDispatchRules#service}
  */
  readonly service: string;
}

function appEngineApplicationUrlDispatchRulesDispatchRulesToTerraform(struct?: AppEngineApplicationUrlDispatchRulesDispatchRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export interface AppEngineApplicationUrlDispatchRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#create AppEngineApplicationUrlDispatchRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#delete AppEngineApplicationUrlDispatchRules#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html#update AppEngineApplicationUrlDispatchRules#update}
  */
  readonly update?: string;
}

function appEngineApplicationUrlDispatchRulesTimeoutsToTerraform(struct?: AppEngineApplicationUrlDispatchRulesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html google_app_engine_application_url_dispatch_rules}
*/
export class AppEngineApplicationUrlDispatchRules extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html google_app_engine_application_url_dispatch_rules} Resource
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
    this._timeouts = config.timeouts;
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
    return this._project
  }

  // dispatch_rules - computed: false, optional: false, required: true
  private _dispatchRules: AppEngineApplicationUrlDispatchRulesDispatchRules[];
  public get dispatchRules() {
    return this.interpolationForAttribute('dispatch_rules') as any;
  }
  public set dispatchRules(value: AppEngineApplicationUrlDispatchRulesDispatchRules[]) {
    this._dispatchRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRulesInput() {
    return this._dispatchRules
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineApplicationUrlDispatchRulesTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppEngineApplicationUrlDispatchRulesTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      dispatch_rules: cdktf.listMapper(appEngineApplicationUrlDispatchRulesDispatchRulesToTerraform)(this._dispatchRules),
      timeouts: appEngineApplicationUrlDispatchRulesTimeoutsToTerraform(this._timeouts),
    };
  }
}
