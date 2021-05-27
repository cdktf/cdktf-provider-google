// https://www.terraform.io/docs/providers/google/r/memcache_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemcacheInstanceConfig extends cdktf.TerraformMetaArguments {
  /** The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used. */
  readonly authorizedNetwork?: string;
  /** A user-visible name for the instance. */
  readonly displayName?: string;
  /** Resource labels to represent user-provided metadata. */
  readonly labels?: { [key: string]: string };
  /** The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"] */
  readonly memcacheVersion?: string;
  /** The resource name of the instance. */
  readonly name: string;
  /** Number of nodes in the memcache instance. */
  readonly nodeCount: number;
  readonly project?: string;
  /** The region of the Memcache instance. If it is not provided, the provider region is used. */
  readonly region?: string;
  /** Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used. */
  readonly zones?: string[];
  /** memcache_parameters block */
  readonly memcacheParameters?: MemcacheInstanceMemcacheParameters[];
  /** node_config block */
  readonly nodeConfig: MemcacheInstanceNodeConfig[];
  /** timeouts block */
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
  /** User-defined set of parameters to use in the memcache process. */
  readonly params?: { [key: string]: string };
}

function memcacheInstanceMemcacheParametersToTerraform(struct?: MemcacheInstanceMemcacheParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.params),
  }
}

export interface MemcacheInstanceNodeConfig {
  /** Number of CPUs per node. */
  readonly cpuCount: number;
  /** Memory size in Mebibytes for each memcache node. */
  readonly memorySizeMb: number;
}

function memcacheInstanceNodeConfigToTerraform(struct?: MemcacheInstanceNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    memory_size_mb: cdktf.numberToTerraform(struct!.memorySizeMb),
  }
}

export interface MemcacheInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function memcacheInstanceTimeoutsToTerraform(struct?: MemcacheInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MemcacheInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _authorizedNetwork?: string;
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string) {
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
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
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
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
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
  private _memcacheVersion?: string;
  public get memcacheVersion() {
    return this.getStringAttribute('memcache_version');
  }
  public set memcacheVersion(value: string ) {
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
  private _name: string;
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
  private _nodeCount: number;
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
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
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
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
  private _memcacheParameters?: MemcacheInstanceMemcacheParameters[];
  public get memcacheParameters() {
    return this.interpolationForAttribute('memcache_parameters') as any;
  }
  public set memcacheParameters(value: MemcacheInstanceMemcacheParameters[] ) {
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
  private _nodeConfig: MemcacheInstanceNodeConfig[];
  public get nodeConfig() {
    return this.interpolationForAttribute('node_config') as any;
  }
  public set nodeConfig(value: MemcacheInstanceNodeConfig[]) {
    this._nodeConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MemcacheInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MemcacheInstanceTimeouts ) {
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
      memcache_parameters: cdktf.listMapper(memcacheInstanceMemcacheParametersToTerraform)(this._memcacheParameters),
      node_config: cdktf.listMapper(memcacheInstanceNodeConfigToTerraform)(this._nodeConfig),
      timeouts: memcacheInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
