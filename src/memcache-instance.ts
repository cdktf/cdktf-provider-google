// https://www.terraform.io/docs/providers/google/r/memcache_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemcacheInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#authorized_network MemcacheInstance#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * A user-visible name for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#display_name MemcacheInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#labels MemcacheInstance#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#memcache_version MemcacheInstance#memcache_version}
  */
  readonly memcacheVersion?: string;
  /**
  * The resource name of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#name MemcacheInstance#name}
  */
  readonly name: string;
  /**
  * Number of nodes in the memcache instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#node_count MemcacheInstance#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#project MemcacheInstance#project}
  */
  readonly project?: string;
  /**
  * The region of the Memcache instance. If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#region MemcacheInstance#region}
  */
  readonly region?: string;
  /**
  * Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#zones MemcacheInstance#zones}
  */
  readonly zones?: string[];
  /**
  * memcache_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#memcache_parameters MemcacheInstance#memcache_parameters}
  */
  readonly memcacheParameters?: MemcacheInstanceMemcacheParameters;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#node_config MemcacheInstance#node_config}
  */
  readonly nodeConfig: MemcacheInstanceNodeConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#timeouts MemcacheInstance#timeouts}
  */
  readonly timeouts?: MemcacheInstanceTimeouts;
}
export class MemcacheInstanceMemcacheNodes extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export interface MemcacheInstanceMemcacheParameters {
  /**
  * User-defined set of parameters to use in the memcache process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#params MemcacheInstance#params}
  */
  readonly params?: { [key: string]: string } | cdktf.IResolvable;
}

function memcacheInstanceMemcacheParametersToTerraform(struct?: MemcacheInstanceMemcacheParametersOutputReference | MemcacheInstanceMemcacheParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.params),
  }
}

export class MemcacheInstanceMemcacheParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get params() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('params') as any;
  }
  public set params(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params
  }
}
export interface MemcacheInstanceNodeConfig {
  /**
  * Number of CPUs per node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#cpu_count MemcacheInstance#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * Memory size in Mebibytes for each memcache node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#memory_size_mb MemcacheInstance#memory_size_mb}
  */
  readonly memorySizeMb: number;
}

function memcacheInstanceNodeConfigToTerraform(struct?: MemcacheInstanceNodeConfigOutputReference | MemcacheInstanceNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    memory_size_mb: cdktf.numberToTerraform(struct!.memorySizeMb),
  }
}

export class MemcacheInstanceNodeConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount
  }

  // memory_size_mb - computed: false, optional: false, required: true
  private _memorySizeMb?: number; 
  public get memorySizeMb() {
    return this.getNumberAttribute('memory_size_mb');
  }
  public set memorySizeMb(value: number) {
    this._memorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeMbInput() {
    return this._memorySizeMb
  }
}
export interface MemcacheInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#create MemcacheInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#delete MemcacheInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html#update MemcacheInstance#update}
  */
  readonly update?: string;
}

function memcacheInstanceTimeoutsToTerraform(struct?: MemcacheInstanceTimeoutsOutputReference | MemcacheInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class MemcacheInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html google_memcache_instance}
*/
export class MemcacheInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_memcache_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/memcache_instance.html google_memcache_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemcacheInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MemcacheInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_memcache_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizedNetwork = config.authorizedNetwork;
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._memcacheVersion = config.memcacheVersion;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._project = config.project;
    this._region = config.region;
    this._zones = config.zones;
    this._memcacheParameters = config.memcacheParameters;
    this._nodeConfig = config.nodeConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_network - computed: true, optional: true, required: false
  private _authorizedNetwork?: string | undefined; 
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string | undefined) {
    this._authorizedNetwork = value;
  }
  public resetAuthorizedNetwork() {
    this._authorizedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworkInput() {
    return this._authorizedNetwork
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // discovery_endpoint - computed: true, optional: false, required: false
  public get discoveryEndpoint() {
    return this.getStringAttribute('discovery_endpoint');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // memcache_full_version - computed: true, optional: false, required: false
  public get memcacheFullVersion() {
    return this.getStringAttribute('memcache_full_version');
  }

  // memcache_nodes - computed: true, optional: false, required: false
  public memcacheNodes(index: string) {
    return new MemcacheInstanceMemcacheNodes(this, 'memcache_nodes', index);
  }

  // memcache_version - computed: false, optional: true, required: false
  private _memcacheVersion?: string | undefined; 
  public get memcacheVersion() {
    return this.getStringAttribute('memcache_version');
  }
  public set memcacheVersion(value: string | undefined) {
    this._memcacheVersion = value;
  }
  public resetMemcacheVersion() {
    this._memcacheVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheVersionInput() {
    return this._memcacheVersion
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // memcache_parameters - computed: false, optional: true, required: false
  private _memcacheParameters?: MemcacheInstanceMemcacheParameters | undefined; 
  private __memcacheParametersOutput = new MemcacheInstanceMemcacheParametersOutputReference(this as any, "memcache_parameters", true);
  public get memcacheParameters() {
    return this.__memcacheParametersOutput;
  }
  public putMemcacheParameters(value: MemcacheInstanceMemcacheParameters | undefined) {
    this._memcacheParameters = value;
  }
  public resetMemcacheParameters() {
    this._memcacheParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheParametersInput() {
    return this._memcacheParameters
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig?: MemcacheInstanceNodeConfig; 
  private __nodeConfigOutput = new MemcacheInstanceNodeConfigOutputReference(this as any, "node_config", true);
  public get nodeConfig() {
    return this.__nodeConfigOutput;
  }
  public putNodeConfig(value: MemcacheInstanceNodeConfig) {
    this._nodeConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MemcacheInstanceTimeouts | undefined; 
  private __timeoutsOutput = new MemcacheInstanceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MemcacheInstanceTimeouts | undefined) {
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
      authorized_network: cdktf.stringToTerraform(this._authorizedNetwork),
      display_name: cdktf.stringToTerraform(this._displayName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      memcache_version: cdktf.stringToTerraform(this._memcacheVersion),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      memcache_parameters: memcacheInstanceMemcacheParametersToTerraform(this._memcacheParameters),
      node_config: memcacheInstanceNodeConfigToTerraform(this._nodeConfig),
      timeouts: memcacheInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
