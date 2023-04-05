# `containerNodePool` Submodule <a name="`containerNodePool` Submodule" id="@cdktf/provider-google.containerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerNodePool <a name="ContainerNodePool" id="@cdktf/provider-google.containerNodePool.ContainerNodePool"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/container_node_pool google_container_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  autoscaling: ContainerNodePoolAutoscaling = None,
  id: str = None,
  initial_node_count: typing.Union[int, float] = None,
  location: str = None,
  management: ContainerNodePoolManagement = None,
  max_pods_per_node: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  network_config: ContainerNodePoolNetworkConfig = None,
  node_config: ContainerNodePoolNodeConfig = None,
  node_count: typing.Union[int, float] = None,
  node_locations: typing.List[str] = None,
  placement_policy: ContainerNodePoolPlacementPolicy = None,
  project: str = None,
  timeouts: ContainerNodePoolTimeouts = None,
  upgrade_settings: ContainerNodePoolUpgradeSettings = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeLocations">node_locations</a></code> | <code>typing.List[str]</code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.placementPolicy">placement_policy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.version">version</a></code> | <code>str</code> | The Kubernetes version for the nodes in this pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.cluster"></a>

- *Type:* str

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cluster ContainerNodePool#cluster}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.autoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#autoscaling ContainerNodePool#autoscaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_node_count`<sup>Optional</sup> <a name="initial_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.initialNodeCount"></a>

- *Type:* typing.Union[int, float]

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#initial_node_count ContainerNodePool#initial_node_count}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#location ContainerNodePool#location}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.management"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#management ContainerNodePool#management}

---

##### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.maxPodsPerNode"></a>

- *Type:* typing.Union[int, float]

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_pods_per_node ContainerNodePool#max_pods_per_node}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.name"></a>

- *Type:* str

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name ContainerNodePool#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.namePrefix"></a>

- *Type:* str

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name_prefix ContainerNodePool#name_prefix}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#network_config ContainerNodePool#network_config}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_config ContainerNodePool#node_config}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_count ContainerNodePool#node_count}

---

##### `node_locations`<sup>Optional</sup> <a name="node_locations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeLocations"></a>

- *Type:* typing.List[str]

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_locations ContainerNodePool#node_locations}

---

##### `placement_policy`<sup>Optional</sup> <a name="placement_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.placementPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#placement_policy ContainerNodePool#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#project ContainerNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#timeouts ContainerNodePool#timeouts}

---

##### `upgrade_settings`<sup>Optional</sup> <a name="upgrade_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.upgradeSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#upgrade_settings ContainerNodePool#upgrade_settings}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.version"></a>

- *Type:* str

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#version ContainerNodePool#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling">put_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement">put_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy">put_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings">put_upgrade_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetAutoscaling">reset_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetInitialNodeCount">reset_initial_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetManagement">reset_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetMaxPodsPerNode">reset_max_pods_per_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeLocations">reset_node_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetPlacementPolicy">reset_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetUpgradeSettings">reset_upgrade_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_autoscaling` <a name="put_autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling"></a>

```python
def put_autoscaling(
  location_policy: str = None,
  max_node_count: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None,
  total_max_node_count: typing.Union[int, float] = None,
  total_min_node_count: typing.Union[int, float] = None
) -> None
```

###### `location_policy`<sup>Optional</sup> <a name="location_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling.parameter.locationPolicy"></a>

- *Type:* str

Location policy specifies the algorithm used when scaling-up the node pool.

"BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#location_policy ContainerNodePool#location_policy}

---

###### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of nodes per zone in the node pool.

Must be >= min_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_node_count ContainerNodePool#max_node_count}

---

###### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of nodes per zone in the node pool.

Must be >=0 and <= max_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#min_node_count ContainerNodePool#min_node_count}

---

###### `total_max_node_count`<sup>Optional</sup> <a name="total_max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling.parameter.totalMaxNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of all nodes in the node pool.

Must be >= total_min_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#total_max_node_count ContainerNodePool#total_max_node_count}

---

###### `total_min_node_count`<sup>Optional</sup> <a name="total_min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling.parameter.totalMinNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of all nodes in the node pool.

Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#total_min_node_count ContainerNodePool#total_min_node_count}

---

##### `put_management` <a name="put_management" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement"></a>

```python
def put_management(
  auto_repair: typing.Union[bool, IResolvable] = None,
  auto_upgrade: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement.parameter.autoRepair"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#auto_repair ContainerNodePool#auto_repair}

---

###### `auto_upgrade`<sup>Optional</sup> <a name="auto_upgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement.parameter.autoUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically upgraded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#auto_upgrade ContainerNodePool#auto_upgrade}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig"></a>

```python
def put_network_config(
  create_pod_range: typing.Union[bool, IResolvable] = None,
  enable_private_nodes: typing.Union[bool, IResolvable] = None,
  pod_ipv4_cidr_block: str = None,
  pod_range: str = None
) -> None
```

###### `create_pod_range`<sup>Optional</sup> <a name="create_pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig.parameter.createPodRange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to create a new range for pod IPs in this node pool.

Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create_pod_range ContainerNodePool#create_pod_range}

---

###### `enable_private_nodes`<sup>Optional</sup> <a name="enable_private_nodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig.parameter.enablePrivateNodes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether nodes have internal IP addresses only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_private_nodes ContainerNodePool#enable_private_nodes}

---

###### `pod_ipv4_cidr_block`<sup>Optional</sup> <a name="pod_ipv4_cidr_block" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig.parameter.podIpv4CidrBlock"></a>

- *Type:* str

The IP address range for pod IPs in this node pool.

Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_ipv4_cidr_block ContainerNodePool#pod_ipv4_cidr_block}

---

###### `pod_range`<sup>Optional</sup> <a name="pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig.parameter.podRange"></a>

- *Type:* str

The ID of the secondary range for pod IPs.

If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_range ContainerNodePool#pod_range}

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig"></a>

```python
def put_node_config(
  advanced_machine_features: ContainerNodePoolNodeConfigAdvancedMachineFeatures = None,
  boot_disk_kms_key: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  gcfs_config: ContainerNodePoolNodeConfigGcfsConfig = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAccelerator]] = None,
  gvnic: ContainerNodePoolNodeConfigGvnic = None,
  image_type: str = None,
  kubelet_config: ContainerNodePoolNodeConfigKubeletConfig = None,
  labels: typing.Mapping[str] = None,
  linux_node_config: ContainerNodePoolNodeConfigLinuxNodeConfig = None,
  local_nvme_ssd_block_config: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig = None,
  local_ssd_count: typing.Union[int, float] = None,
  logging_variant: str = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  min_cpu_platform: str = None,
  node_group: str = None,
  oauth_scopes: typing.List[str] = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  reservation_affinity: ContainerNodePoolNodeConfigReservationAffinity = None,
  resource_labels: typing.Mapping[str] = None,
  service_account: str = None,
  shielded_instance_config: ContainerNodePoolNodeConfigShieldedInstanceConfig = None,
  spot: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  taint: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigTaint]] = None,
  workload_metadata_config: ContainerNodePoolNodeConfigWorkloadMetadataConfig = None
) -> None
```

###### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#advanced_machine_features ContainerNodePool#advanced_machine_features}

---

###### `boot_disk_kms_key`<sup>Optional</sup> <a name="boot_disk_kms_key" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.bootDiskKmsKey"></a>

- *Type:* str

The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#boot_disk_kms_key ContainerNodePool#boot_disk_kms_key}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#disk_size_gb ContainerNodePool#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.diskType"></a>

- *Type:* str

Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#disk_type ContainerNodePool#disk_type}

---

###### `gcfs_config`<sup>Optional</sup> <a name="gcfs_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.gcfsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

gcfs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gcfs_config ContainerNodePool#gcfs_config}

---

###### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.guestAccelerator"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]

List of the type and count of accelerator cards attached to the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#guest_accelerator ContainerNodePool#guest_accelerator}

---

###### `gvnic`<sup>Optional</sup> <a name="gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.gvnic"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

gvnic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gvnic ContainerNodePool#gvnic}

---

###### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.imageType"></a>

- *Type:* str

The image type to use for this node.

Note that for a given image type, the latest version of it will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#image_type ContainerNodePool#image_type}

---

###### `kubelet_config`<sup>Optional</sup> <a name="kubelet_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.kubeletConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#kubelet_config ContainerNodePool#kubelet_config}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that Kubernetes may apply to the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#labels ContainerNodePool#labels}

---

###### `linux_node_config`<sup>Optional</sup> <a name="linux_node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.linuxNodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

linux_node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#linux_node_config ContainerNodePool#linux_node_config}

---

###### `local_nvme_ssd_block_config`<sup>Optional</sup> <a name="local_nvme_ssd_block_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.localNvmeSsdBlockConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

local_nvme_ssd_block_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_nvme_ssd_block_config ContainerNodePool#local_nvme_ssd_block_config}

---

###### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

The number of local SSD disks to be attached to the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

###### `logging_variant`<sup>Optional</sup> <a name="logging_variant" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.loggingVariant"></a>

- *Type:* str

Type of logging agent that is used as the default value for node pools in the cluster.

Valid values include DEFAULT and MAX_THROUGHPUT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#logging_variant ContainerNodePool#logging_variant}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.machineType"></a>

- *Type:* str

The name of a Google Compute Engine machine type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#machine_type ContainerNodePool#machine_type}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The metadata key/value pairs assigned to instances in the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#metadata ContainerNodePool#metadata}

---

###### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.minCpuPlatform"></a>

- *Type:* str

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or newer CPU platform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#min_cpu_platform ContainerNodePool#min_cpu_platform}

---

###### `node_group`<sup>Optional</sup> <a name="node_group" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.nodeGroup"></a>

- *Type:* str

Setting this field will assign instances of this pool to run on the specified node group.

This is useful for running workloads on sole tenant nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_group ContainerNodePool#node_group}

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

The set of Google API scopes to be made available on all of the node VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#oauth_scopes ContainerNodePool#oauth_scopes}

---

###### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.preemptible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as preemptible VM instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#preemptible ContainerNodePool#preemptible}

---

###### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#reservation_affinity ContainerNodePool#reservation_affinity}

---

###### `resource_labels`<sup>Optional</sup> <a name="resource_labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.resourceLabels"></a>

- *Type:* typing.Mapping[str]

The GCE resource labels (a map of key/value pairs) to be applied to the node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#resource_labels ContainerNodePool#resource_labels}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.serviceAccount"></a>

- *Type:* str

The Google Cloud Platform Service Account to be used by the node VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#service_account ContainerNodePool#service_account}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#shielded_instance_config ContainerNodePool#shielded_instance_config}

---

###### `spot`<sup>Optional</sup> <a name="spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.spot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as spot VM instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#spot ContainerNodePool#spot}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.tags"></a>

- *Type:* typing.List[str]

The list of instance tags applied to all nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#tags ContainerNodePool#tags}

---

###### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.taint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]

List of Kubernetes taints to be applied to each node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#taint ContainerNodePool#taint}

---

###### `workload_metadata_config`<sup>Optional</sup> <a name="workload_metadata_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.workloadMetadataConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

workload_metadata_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#workload_metadata_config ContainerNodePool#workload_metadata_config}

---

##### `put_placement_policy` <a name="put_placement_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy"></a>

```python
def put_placement_policy(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy.parameter.type"></a>

- *Type:* str

Type defines the type of placement policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#type ContainerNodePool#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create ContainerNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#delete ContainerNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#update ContainerNodePool#update}.

---

##### `put_upgrade_settings` <a name="put_upgrade_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings"></a>

```python
def put_upgrade_settings(
  blue_green_settings: ContainerNodePoolUpgradeSettingsBlueGreenSettings = None,
  max_surge: typing.Union[int, float] = None,
  max_unavailable: typing.Union[int, float] = None,
  strategy: str = None
) -> None
```

###### `blue_green_settings`<sup>Optional</sup> <a name="blue_green_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings.parameter.blueGreenSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

blue_green_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#blue_green_settings ContainerNodePool#blue_green_settings}

---

###### `max_surge`<sup>Optional</sup> <a name="max_surge" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings.parameter.maxSurge"></a>

- *Type:* typing.Union[int, float]

The number of additional nodes that can be added to the node pool during an upgrade.

Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_surge ContainerNodePool#max_surge}

---

###### `max_unavailable`<sup>Optional</sup> <a name="max_unavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings.parameter.maxUnavailable"></a>

- *Type:* typing.Union[int, float]

The number of nodes that can be simultaneously unavailable during an upgrade.

Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_unavailable ContainerNodePool#max_unavailable}

---

###### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings.parameter.strategy"></a>

- *Type:* str

Update strategy for the given nodepool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#strategy ContainerNodePool#strategy}

---

##### `reset_autoscaling` <a name="reset_autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetAutoscaling"></a>

```python
def reset_autoscaling() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_node_count` <a name="reset_initial_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetInitialNodeCount"></a>

```python
def reset_initial_node_count() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_management` <a name="reset_management" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetManagement"></a>

```python
def reset_management() -> None
```

##### `reset_max_pods_per_node` <a name="reset_max_pods_per_node" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetMaxPodsPerNode"></a>

```python
def reset_max_pods_per_node() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_node_config` <a name="reset_node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_node_locations` <a name="reset_node_locations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeLocations"></a>

```python
def reset_node_locations() -> None
```

##### `reset_placement_policy` <a name="reset_placement_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetPlacementPolicy"></a>

```python
def reset_placement_policy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upgrade_settings` <a name="reset_upgrade_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetUpgradeSettings"></a>

```python
def reset_upgrade_settings() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePool.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference">ContainerNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.instanceGroupUrls">instance_group_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managedInstanceGroupUrls">managed_instance_group_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference">ContainerNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference">ContainerNodePoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference">ContainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicy">placement_policy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference">ContainerNodePoolPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference">ContainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference">ContainerNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscalingInput">autoscaling_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCountInput">initial_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managementInput">management_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNodeInput">max_pods_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocationsInput">node_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicyInput">placement_policy_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettingsInput">upgrade_settings_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocations">node_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscaling"></a>

```python
autoscaling: ContainerNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference">ContainerNodePoolAutoscalingOutputReference</a>

---

##### `instance_group_urls`<sup>Required</sup> <a name="instance_group_urls" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.instanceGroupUrls"></a>

```python
instance_group_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_group_urls`<sup>Required</sup> <a name="managed_instance_group_urls" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managedInstanceGroupUrls"></a>

```python
managed_instance_group_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.management"></a>

```python
management: ContainerNodePoolManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference">ContainerNodePoolManagementOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfig"></a>

```python
network_config: ContainerNodePoolNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference">ContainerNodePoolNetworkConfigOutputReference</a>

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfig"></a>

```python
node_config: ContainerNodePoolNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference">ContainerNodePoolNodeConfigOutputReference</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `placement_policy`<sup>Required</sup> <a name="placement_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicy"></a>

```python
placement_policy: ContainerNodePoolPlacementPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference">ContainerNodePoolPlacementPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeouts"></a>

```python
timeouts: ContainerNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference">ContainerNodePoolTimeoutsOutputReference</a>

---

##### `upgrade_settings`<sup>Required</sup> <a name="upgrade_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettings"></a>

```python
upgrade_settings: ContainerNodePoolUpgradeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference">ContainerNodePoolUpgradeSettingsOutputReference</a>

---

##### `autoscaling_input`<sup>Optional</sup> <a name="autoscaling_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscalingInput"></a>

```python
autoscaling_input: ContainerNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_node_count_input`<sup>Optional</sup> <a name="initial_node_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCountInput"></a>

```python
initial_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managementInput"></a>

```python
management_input: ContainerNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---

##### `max_pods_per_node_input`<sup>Optional</sup> <a name="max_pods_per_node_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNodeInput"></a>

```python
max_pods_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfigInput"></a>

```python
network_config_input: ContainerNodePoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfigInput"></a>

```python
node_config_input: ContainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_locations_input`<sup>Optional</sup> <a name="node_locations_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocationsInput"></a>

```python
node_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `placement_policy_input`<sup>Optional</sup> <a name="placement_policy_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicyInput"></a>

```python
placement_policy_input: ContainerNodePoolPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ContainerNodePoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>, cdktf.IResolvable]

---

##### `upgrade_settings_input`<sup>Optional</sup> <a name="upgrade_settings_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettingsInput"></a>

```python
upgrade_settings_input: ContainerNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_node_count`<sup>Required</sup> <a name="initial_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCount"></a>

```python
initial_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_locations`<sup>Required</sup> <a name="node_locations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocations"></a>

```python
node_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerNodePoolAutoscaling <a name="ContainerNodePoolAutoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolAutoscaling(
  location_policy: str = None,
  max_node_count: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None,
  total_max_node_count: typing.Union[int, float] = None,
  total_min_node_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.locationPolicy">location_policy</a></code> | <code>str</code> | Location policy specifies the algorithm used when scaling-up the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMaxNodeCount">total_max_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of all nodes in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMinNodeCount">total_min_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of all nodes in the node pool. |

---

##### `location_policy`<sup>Optional</sup> <a name="location_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.locationPolicy"></a>

```python
location_policy: str
```

- *Type:* str

Location policy specifies the algorithm used when scaling-up the node pool.

"BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#location_policy ContainerNodePool#location_policy}

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of nodes per zone in the node pool.

Must be >= min_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_node_count ContainerNodePool#max_node_count}

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of nodes per zone in the node pool.

Must be >=0 and <= max_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#min_node_count ContainerNodePool#min_node_count}

---

##### `total_max_node_count`<sup>Optional</sup> <a name="total_max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMaxNodeCount"></a>

```python
total_max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of all nodes in the node pool.

Must be >= total_min_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#total_max_node_count ContainerNodePool#total_max_node_count}

---

##### `total_min_node_count`<sup>Optional</sup> <a name="total_min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMinNodeCount"></a>

```python
total_min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of all nodes in the node pool.

Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#total_min_node_count ContainerNodePool#total_min_node_count}

---

### ContainerNodePoolConfig <a name="ContainerNodePoolConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  autoscaling: ContainerNodePoolAutoscaling = None,
  id: str = None,
  initial_node_count: typing.Union[int, float] = None,
  location: str = None,
  management: ContainerNodePoolManagement = None,
  max_pods_per_node: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  network_config: ContainerNodePoolNetworkConfig = None,
  node_config: ContainerNodePoolNodeConfig = None,
  node_count: typing.Union[int, float] = None,
  node_locations: typing.List[str] = None,
  placement_policy: ContainerNodePoolPlacementPolicy = None,
  project: str = None,
  timeouts: ContainerNodePoolTimeouts = None,
  upgrade_settings: ContainerNodePoolUpgradeSettings = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.cluster">cluster</a></code> | <code>str</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.name">name</a></code> | <code>str</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeLocations">node_locations</a></code> | <code>typing.List[str]</code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.placementPolicy">placement_policy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.version">version</a></code> | <code>str</code> | The Kubernetes version for the nodes in this pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cluster ContainerNodePool#cluster}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.autoscaling"></a>

```python
autoscaling: ContainerNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#autoscaling ContainerNodePool#autoscaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_node_count`<sup>Optional</sup> <a name="initial_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.initialNodeCount"></a>

```python
initial_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#initial_node_count ContainerNodePool#initial_node_count}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#location ContainerNodePool#location}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.management"></a>

```python
management: ContainerNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#management ContainerNodePool#management}

---

##### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_pods_per_node ContainerNodePool#max_pods_per_node}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name ContainerNodePool#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name_prefix ContainerNodePool#name_prefix}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.networkConfig"></a>

```python
network_config: ContainerNodePoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#network_config ContainerNodePool#network_config}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeConfig"></a>

```python
node_config: ContainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_config ContainerNodePool#node_config}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_count ContainerNodePool#node_count}

---

##### `node_locations`<sup>Optional</sup> <a name="node_locations" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeLocations"></a>

```python
node_locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_locations ContainerNodePool#node_locations}

---

##### `placement_policy`<sup>Optional</sup> <a name="placement_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.placementPolicy"></a>

```python
placement_policy: ContainerNodePoolPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#placement_policy ContainerNodePool#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#project ContainerNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.timeouts"></a>

```python
timeouts: ContainerNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#timeouts ContainerNodePool#timeouts}

---

##### `upgrade_settings`<sup>Optional</sup> <a name="upgrade_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.upgradeSettings"></a>

```python
upgrade_settings: ContainerNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#upgrade_settings ContainerNodePool#upgrade_settings}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#version ContainerNodePool#version}

---

### ContainerNodePoolManagement <a name="ContainerNodePoolManagement" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolManagement(
  auto_repair: typing.Union[bool, IResolvable] = None,
  auto_upgrade: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes will be automatically repaired. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoUpgrade">auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes will be automatically upgraded. |

---

##### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#auto_repair ContainerNodePool#auto_repair}

---

##### `auto_upgrade`<sup>Optional</sup> <a name="auto_upgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoUpgrade"></a>

```python
auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically upgraded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#auto_upgrade ContainerNodePool#auto_upgrade}

---

### ContainerNodePoolNetworkConfig <a name="ContainerNodePoolNetworkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNetworkConfig(
  create_pod_range: typing.Union[bool, IResolvable] = None,
  enable_private_nodes: typing.Union[bool, IResolvable] = None,
  pod_ipv4_cidr_block: str = None,
  pod_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.createPodRange">create_pod_range</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to create a new range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.enablePrivateNodes">enable_private_nodes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether nodes have internal IP addresses only. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podIpv4CidrBlock">pod_ipv4_cidr_block</a></code> | <code>str</code> | The IP address range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podRange">pod_range</a></code> | <code>str</code> | The ID of the secondary range for pod IPs. |

---

##### `create_pod_range`<sup>Optional</sup> <a name="create_pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.createPodRange"></a>

```python
create_pod_range: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to create a new range for pod IPs in this node pool.

Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create_pod_range ContainerNodePool#create_pod_range}

---

##### `enable_private_nodes`<sup>Optional</sup> <a name="enable_private_nodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.enablePrivateNodes"></a>

```python
enable_private_nodes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether nodes have internal IP addresses only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_private_nodes ContainerNodePool#enable_private_nodes}

---

##### `pod_ipv4_cidr_block`<sup>Optional</sup> <a name="pod_ipv4_cidr_block" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podIpv4CidrBlock"></a>

```python
pod_ipv4_cidr_block: str
```

- *Type:* str

The IP address range for pod IPs in this node pool.

Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_ipv4_cidr_block ContainerNodePool#pod_ipv4_cidr_block}

---

##### `pod_range`<sup>Optional</sup> <a name="pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podRange"></a>

```python
pod_range: str
```

- *Type:* str

The ID of the secondary range for pod IPs.

If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_range ContainerNodePool#pod_range}

---

### ContainerNodePoolNodeConfig <a name="ContainerNodePoolNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfig(
  advanced_machine_features: ContainerNodePoolNodeConfigAdvancedMachineFeatures = None,
  boot_disk_kms_key: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  gcfs_config: ContainerNodePoolNodeConfigGcfsConfig = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAccelerator]] = None,
  gvnic: ContainerNodePoolNodeConfigGvnic = None,
  image_type: str = None,
  kubelet_config: ContainerNodePoolNodeConfigKubeletConfig = None,
  labels: typing.Mapping[str] = None,
  linux_node_config: ContainerNodePoolNodeConfigLinuxNodeConfig = None,
  local_nvme_ssd_block_config: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig = None,
  local_ssd_count: typing.Union[int, float] = None,
  logging_variant: str = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  min_cpu_platform: str = None,
  node_group: str = None,
  oauth_scopes: typing.List[str] = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  reservation_affinity: ContainerNodePoolNodeConfigReservationAffinity = None,
  resource_labels: typing.Mapping[str] = None,
  service_account: str = None,
  shielded_instance_config: ContainerNodePoolNodeConfigShieldedInstanceConfig = None,
  spot: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  taint: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigTaint]] = None,
  workload_metadata_config: ContainerNodePoolNodeConfigWorkloadMetadataConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.bootDiskKmsKey">boot_disk_kms_key</a></code> | <code>str</code> | The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskType">disk_type</a></code> | <code>str</code> | Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gcfsConfig">gcfs_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | gcfs_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.guestAccelerator">guest_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]</code> | List of the type and count of accelerator cards attached to the instance. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | gvnic block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.imageType">image_type</a></code> | <code>str</code> | The image type to use for this node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.kubeletConfig">kubelet_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.linuxNodeConfig">linux_node_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | linux_node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig">local_nvme_ssd_block_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | local_nvme_ssd_block_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | The number of local SSD disks to be attached to the node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.loggingVariant">logging_variant</a></code> | <code>str</code> | Type of logging agent that is used as the default value for node pools in the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.machineType">machine_type</a></code> | <code>str</code> | The name of a Google Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata key/value pairs assigned to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | Minimum CPU platform to be used by this instance. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.nodeGroup">node_group</a></code> | <code>str</code> | Setting this field will assign instances of this pool to run on the specified node group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | The set of Google API scopes to be made available on all of the node VMs. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes are created as preemptible VM instances. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.resourceLabels">resource_labels</a></code> | <code>typing.Mapping[str]</code> | The GCE resource labels (a map of key/value pairs) to be applied to the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.spot">spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes are created as spot VM instances. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The list of instance tags applied to all nodes. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.taint">taint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]</code> | List of Kubernetes taints to be applied to each node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.workloadMetadataConfig">workload_metadata_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | workload_metadata_config block. |

---

##### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: ContainerNodePoolNodeConfigAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#advanced_machine_features ContainerNodePool#advanced_machine_features}

---

##### `boot_disk_kms_key`<sup>Optional</sup> <a name="boot_disk_kms_key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.bootDiskKmsKey"></a>

```python
boot_disk_kms_key: str
```

- *Type:* str

The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#boot_disk_kms_key ContainerNodePool#boot_disk_kms_key}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#disk_size_gb ContainerNodePool#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#disk_type ContainerNodePool#disk_type}

---

##### `gcfs_config`<sup>Optional</sup> <a name="gcfs_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gcfsConfig"></a>

```python
gcfs_config: ContainerNodePoolNodeConfigGcfsConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

gcfs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gcfs_config ContainerNodePool#gcfs_config}

---

##### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.guestAccelerator"></a>

```python
guest_accelerator: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]

List of the type and count of accelerator cards attached to the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#guest_accelerator ContainerNodePool#guest_accelerator}

---

##### `gvnic`<sup>Optional</sup> <a name="gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gvnic"></a>

```python
gvnic: ContainerNodePoolNodeConfigGvnic
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

gvnic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gvnic ContainerNodePool#gvnic}

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

The image type to use for this node.

Note that for a given image type, the latest version of it will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#image_type ContainerNodePool#image_type}

---

##### `kubelet_config`<sup>Optional</sup> <a name="kubelet_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.kubeletConfig"></a>

```python
kubelet_config: ContainerNodePoolNodeConfigKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#kubelet_config ContainerNodePool#kubelet_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that Kubernetes may apply to the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#labels ContainerNodePool#labels}

---

##### `linux_node_config`<sup>Optional</sup> <a name="linux_node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.linuxNodeConfig"></a>

```python
linux_node_config: ContainerNodePoolNodeConfigLinuxNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

linux_node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#linux_node_config ContainerNodePool#linux_node_config}

---

##### `local_nvme_ssd_block_config`<sup>Optional</sup> <a name="local_nvme_ssd_block_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig"></a>

```python
local_nvme_ssd_block_config: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

local_nvme_ssd_block_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_nvme_ssd_block_config ContainerNodePool#local_nvme_ssd_block_config}

---

##### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of local SSD disks to be attached to the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

##### `logging_variant`<sup>Optional</sup> <a name="logging_variant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.loggingVariant"></a>

```python
logging_variant: str
```

- *Type:* str

Type of logging agent that is used as the default value for node pools in the cluster.

Valid values include DEFAULT and MAX_THROUGHPUT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#logging_variant ContainerNodePool#logging_variant}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The name of a Google Compute Engine machine type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#machine_type ContainerNodePool#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The metadata key/value pairs assigned to instances in the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#metadata ContainerNodePool#metadata}

---

##### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or newer CPU platform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#min_cpu_platform ContainerNodePool#min_cpu_platform}

---

##### `node_group`<sup>Optional</sup> <a name="node_group" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.nodeGroup"></a>

```python
node_group: str
```

- *Type:* str

Setting this field will assign instances of this pool to run on the specified node group.

This is useful for running workloads on sole tenant nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_group ContainerNodePool#node_group}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

The set of Google API scopes to be made available on all of the node VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#oauth_scopes ContainerNodePool#oauth_scopes}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as preemptible VM instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#preemptible ContainerNodePool#preemptible}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.reservationAffinity"></a>

```python
reservation_affinity: ContainerNodePoolNodeConfigReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#reservation_affinity ContainerNodePool#reservation_affinity}

---

##### `resource_labels`<sup>Optional</sup> <a name="resource_labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.resourceLabels"></a>

```python
resource_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The GCE resource labels (a map of key/value pairs) to be applied to the node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#resource_labels ContainerNodePool#resource_labels}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The Google Cloud Platform Service Account to be used by the node VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#service_account ContainerNodePool#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: ContainerNodePoolNodeConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#shielded_instance_config ContainerNodePool#shielded_instance_config}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.spot"></a>

```python
spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as spot VM instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#spot ContainerNodePool#spot}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The list of instance tags applied to all nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#tags ContainerNodePool#tags}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.taint"></a>

```python
taint: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]

List of Kubernetes taints to be applied to each node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#taint ContainerNodePool#taint}

---

##### `workload_metadata_config`<sup>Optional</sup> <a name="workload_metadata_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.workloadMetadataConfig"></a>

```python
workload_metadata_config: ContainerNodePoolNodeConfigWorkloadMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

workload_metadata_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#workload_metadata_config ContainerNodePool#workload_metadata_config}

---

### ContainerNodePoolNodeConfigAdvancedMachineFeatures <a name="ContainerNodePoolNodeConfigAdvancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures(
  threads_per_core: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | The number of threads per physical core. |

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#threads_per_core ContainerNodePool#threads_per_core}

---

### ContainerNodePoolNodeConfigGcfsConfig <a name="ContainerNodePoolNodeConfigGcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGcfsConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not GCFS is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not GCFS is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigGuestAccelerator <a name="ContainerNodePoolNodeConfigGuestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator(
  count: typing.Union[int, float] = None,
  gpu_partition_size: str = None,
  gpu_sharing_config: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#count ContainerNodePool#count}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize">gpu_partition_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_partition_size ContainerNodePool#gpu_partition_size}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig">gpu_sharing_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_config ContainerNodePool#gpu_sharing_config}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#type ContainerNodePool#type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#count ContainerNodePool#count}.

---

##### `gpu_partition_size`<sup>Optional</sup> <a name="gpu_partition_size" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize"></a>

```python
gpu_partition_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_partition_size ContainerNodePool#gpu_partition_size}.

---

##### `gpu_sharing_config`<sup>Optional</sup> <a name="gpu_sharing_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig"></a>

```python
gpu_sharing_config: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_config ContainerNodePool#gpu_sharing_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#type ContainerNodePool#type}.

---

### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig(
  gpu_sharing_strategy: str = None,
  max_shared_clients_per_gpu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy">gpu_sharing_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_strategy ContainerNodePool#gpu_sharing_strategy}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu">max_shared_clients_per_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_shared_clients_per_gpu ContainerNodePool#max_shared_clients_per_gpu}. |

---

##### `gpu_sharing_strategy`<sup>Optional</sup> <a name="gpu_sharing_strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy"></a>

```python
gpu_sharing_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_strategy ContainerNodePool#gpu_sharing_strategy}.

---

##### `max_shared_clients_per_gpu`<sup>Optional</sup> <a name="max_shared_clients_per_gpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu"></a>

```python
max_shared_clients_per_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_shared_clients_per_gpu ContainerNodePool#max_shared_clients_per_gpu}.

---

### ContainerNodePoolNodeConfigGvnic <a name="ContainerNodePoolNodeConfigGvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGvnic(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not gvnic is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not gvnic is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigKubeletConfig <a name="ContainerNodePoolNodeConfigKubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigKubeletConfig(
  cpu_manager_policy: str,
  cpu_cfs_quota: typing.Union[bool, IResolvable] = None,
  cpu_cfs_quota_period: str = None,
  pod_pids_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy">cpu_manager_policy</a></code> | <code>str</code> | Control the CPU management policy on the node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota">cpu_cfs_quota</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable CPU CFS quota enforcement for containers that specify CPU limits. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod">cpu_cfs_quota_period</a></code> | <code>str</code> | Set the CPU CFS quota period value 'cpu.cfs_period_us'. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit">pod_pids_limit</a></code> | <code>typing.Union[int, float]</code> | Controls the maximum number of processes allowed to run in a pod. |

---

##### `cpu_manager_policy`<sup>Required</sup> <a name="cpu_manager_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy"></a>

```python
cpu_manager_policy: str
```

- *Type:* str

Control the CPU management policy on the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_manager_policy ContainerNodePool#cpu_manager_policy}

---

##### `cpu_cfs_quota`<sup>Optional</sup> <a name="cpu_cfs_quota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota"></a>

```python
cpu_cfs_quota: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU CFS quota enforcement for containers that specify CPU limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_cfs_quota ContainerNodePool#cpu_cfs_quota}

---

##### `cpu_cfs_quota_period`<sup>Optional</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```python
cpu_cfs_quota_period: str
```

- *Type:* str

Set the CPU CFS quota period value 'cpu.cfs_period_us'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_cfs_quota_period ContainerNodePool#cpu_cfs_quota_period}

---

##### `pod_pids_limit`<sup>Optional</sup> <a name="pod_pids_limit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit"></a>

```python
pod_pids_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Controls the maximum number of processes allowed to run in a pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_pids_limit ContainerNodePool#pod_pids_limit}

---

### ContainerNodePoolNodeConfigLinuxNodeConfig <a name="ContainerNodePoolNodeConfigLinuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig(
  sysctls: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls">sysctls</a></code> | <code>typing.Mapping[str]</code> | The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. |

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls"></a>

```python
sysctls: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#sysctls ContainerNodePool#sysctls}

---

### ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig <a name="ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig(
  local_ssd_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Number of raw-block local NVMe SSD disks to be attached to the node. |

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of raw-block local NVMe SSD disks to be attached to the node.

Each local SSD is 375 GB in size.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

### ContainerNodePoolNodeConfigReservationAffinity <a name="ContainerNodePoolNodeConfigReservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigReservationAffinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | Corresponds to the type of reservation consumption. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.key">key</a></code> | <code>str</code> | The label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.values">values</a></code> | <code>typing.List[str]</code> | The label values of the reservation resource. |

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

Corresponds to the type of reservation consumption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#consume_reservation_type ContainerNodePool#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.key"></a>

```python
key: str
```

- *Type:* str

The label key of a reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#key ContainerNodePool#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The label values of the reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#values ContainerNodePool#values}

---

### ContainerNodePoolNodeConfigShieldedInstanceConfig <a name="ContainerNodePoolNodeConfigShieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_integrity_monitoring ContainerNodePool#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_secure_boot ContainerNodePool#enable_secure_boot}

---

### ContainerNodePoolNodeConfigTaint <a name="ContainerNodePoolNodeConfigTaint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigTaint(
  effect: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#effect ContainerNodePool#effect}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#key ContainerNodePool#key}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#value ContainerNodePool#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#effect ContainerNodePool#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#key ContainerNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#value ContainerNodePool#value}.

---

### ContainerNodePoolNodeConfigWorkloadMetadataConfig <a name="ContainerNodePoolNodeConfigWorkloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode">mode</a></code> | <code>str</code> | Mode is the configuration for how to expose metadata to workloads running on the node. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Mode is the configuration for how to expose metadata to workloads running on the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#mode ContainerNodePool#mode}

---

### ContainerNodePoolPlacementPolicy <a name="ContainerNodePoolPlacementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolPlacementPolicy(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.type">type</a></code> | <code>str</code> | Type defines the type of placement policy. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

Type defines the type of placement policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#type ContainerNodePool#type}

---

### ContainerNodePoolTimeouts <a name="ContainerNodePoolTimeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create ContainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#delete ContainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#update ContainerNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create ContainerNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#delete ContainerNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#update ContainerNodePool#update}.

---

### ContainerNodePoolUpgradeSettings <a name="ContainerNodePoolUpgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolUpgradeSettings(
  blue_green_settings: ContainerNodePoolUpgradeSettingsBlueGreenSettings = None,
  max_surge: typing.Union[int, float] = None,
  max_unavailable: typing.Union[int, float] = None,
  strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.blueGreenSettings">blue_green_settings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | blue_green_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxSurge">max_surge</a></code> | <code>typing.Union[int, float]</code> | The number of additional nodes that can be added to the node pool during an upgrade. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxUnavailable">max_unavailable</a></code> | <code>typing.Union[int, float]</code> | The number of nodes that can be simultaneously unavailable during an upgrade. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.strategy">strategy</a></code> | <code>str</code> | Update strategy for the given nodepool. |

---

##### `blue_green_settings`<sup>Optional</sup> <a name="blue_green_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.blueGreenSettings"></a>

```python
blue_green_settings: ContainerNodePoolUpgradeSettingsBlueGreenSettings
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

blue_green_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#blue_green_settings ContainerNodePool#blue_green_settings}

---

##### `max_surge`<sup>Optional</sup> <a name="max_surge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxSurge"></a>

```python
max_surge: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of additional nodes that can be added to the node pool during an upgrade.

Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_surge ContainerNodePool#max_surge}

---

##### `max_unavailable`<sup>Optional</sup> <a name="max_unavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxUnavailable"></a>

```python
max_unavailable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes that can be simultaneously unavailable during an upgrade.

Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_unavailable ContainerNodePool#max_unavailable}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

Update strategy for the given nodepool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#strategy ContainerNodePool#strategy}

---

### ContainerNodePoolUpgradeSettingsBlueGreenSettings <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings(
  standard_rollout_policy: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy,
  node_pool_soak_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy">standard_rollout_policy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | standard_rollout_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration">node_pool_soak_duration</a></code> | <code>str</code> | Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. |

---

##### `standard_rollout_policy`<sup>Required</sup> <a name="standard_rollout_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy"></a>

```python
standard_rollout_policy: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

standard_rollout_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#standard_rollout_policy ContainerNodePool#standard_rollout_policy}

---

##### `node_pool_soak_duration`<sup>Optional</sup> <a name="node_pool_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration"></a>

```python
node_pool_soak_duration: str
```

- *Type:* str

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_pool_soak_duration ContainerNodePool#node_pool_soak_duration}

---

### ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy(
  batch_node_count: typing.Union[int, float] = None,
  batch_percentage: typing.Union[int, float] = None,
  batch_soak_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount">batch_node_count</a></code> | <code>typing.Union[int, float]</code> | Number of blue nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage">batch_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of the blue pool nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration">batch_soak_duration</a></code> | <code>str</code> | Soak time after each batch gets drained. |

---

##### `batch_node_count`<sup>Optional</sup> <a name="batch_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount"></a>

```python
batch_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of blue nodes to drain in a batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_node_count ContainerNodePool#batch_node_count}

---

##### `batch_percentage`<sup>Optional</sup> <a name="batch_percentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage"></a>

```python
batch_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of the blue pool nodes to drain in a batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_percentage ContainerNodePool#batch_percentage}

---

##### `batch_soak_duration`<sup>Optional</sup> <a name="batch_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration"></a>

```python
batch_soak_duration: str
```

- *Type:* str

Soak time after each batch gets drained.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_soak_duration ContainerNodePool#batch_soak_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerNodePoolAutoscalingOutputReference <a name="ContainerNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolAutoscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetLocationPolicy">reset_location_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount">reset_total_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount">reset_total_min_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location_policy` <a name="reset_location_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetLocationPolicy"></a>

```python
def reset_location_policy() -> None
```

##### `reset_max_node_count` <a name="reset_max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```

##### `reset_total_max_node_count` <a name="reset_total_max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount"></a>

```python
def reset_total_max_node_count() -> None
```

##### `reset_total_min_node_count` <a name="reset_total_min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount"></a>

```python
def reset_total_min_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput">location_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput">total_max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput">total_min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicy">location_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount">total_max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount">total_min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_policy_input`<sup>Optional</sup> <a name="location_policy_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput"></a>

```python
location_policy_input: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_max_node_count_input`<sup>Optional</sup> <a name="total_max_node_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput"></a>

```python
total_max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_min_node_count_input`<sup>Optional</sup> <a name="total_min_node_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput"></a>

```python
total_min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_policy`<sup>Required</sup> <a name="location_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicy"></a>

```python
location_policy: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_max_node_count`<sup>Required</sup> <a name="total_max_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount"></a>

```python
total_max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_min_node_count`<sup>Required</sup> <a name="total_min_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount"></a>

```python
total_min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---


### ContainerNodePoolManagementOutputReference <a name="ContainerNodePoolManagementOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoRepair">reset_auto_repair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoUpgrade">reset_auto_upgrade</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_repair` <a name="reset_auto_repair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoRepair"></a>

```python
def reset_auto_repair() -> None
```

##### `reset_auto_upgrade` <a name="reset_auto_upgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoUpgrade"></a>

```python
def reset_auto_upgrade() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepairInput">auto_repair_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgradeInput">auto_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgrade">auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_repair_input`<sup>Optional</sup> <a name="auto_repair_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepairInput"></a>

```python
auto_repair_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_input`<sup>Optional</sup> <a name="auto_upgrade_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgradeInput"></a>

```python
auto_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_repair`<sup>Required</sup> <a name="auto_repair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade`<sup>Required</sup> <a name="auto_upgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgrade"></a>

```python
auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---


### ContainerNodePoolNetworkConfigOutputReference <a name="ContainerNodePoolNetworkConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange">reset_create_pod_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes">reset_enable_private_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock">reset_pod_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodRange">reset_pod_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create_pod_range` <a name="reset_create_pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange"></a>

```python
def reset_create_pod_range() -> None
```

##### `reset_enable_private_nodes` <a name="reset_enable_private_nodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes"></a>

```python
def reset_enable_private_nodes() -> None
```

##### `reset_pod_ipv4_cidr_block` <a name="reset_pod_ipv4_cidr_block" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock"></a>

```python
def reset_pod_ipv4_cidr_block() -> None
```

##### `reset_pod_range` <a name="reset_pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodRange"></a>

```python
def reset_pod_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput">create_pod_range_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput">enable_private_nodes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput">pod_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRangeInput">pod_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRange">create_pod_range</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes">enable_private_nodes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock">pod_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRange">pod_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_pod_range_input`<sup>Optional</sup> <a name="create_pod_range_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput"></a>

```python
create_pod_range_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_private_nodes_input`<sup>Optional</sup> <a name="enable_private_nodes_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput"></a>

```python
enable_private_nodes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_ipv4_cidr_block_input`<sup>Optional</sup> <a name="pod_ipv4_cidr_block_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput"></a>

```python
pod_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `pod_range_input`<sup>Optional</sup> <a name="pod_range_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRangeInput"></a>

```python
pod_range_input: str
```

- *Type:* str

---

##### `create_pod_range`<sup>Required</sup> <a name="create_pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRange"></a>

```python
create_pod_range: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_private_nodes`<sup>Required</sup> <a name="enable_private_nodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes"></a>

```python
enable_private_nodes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_ipv4_cidr_block`<sup>Required</sup> <a name="pod_ipv4_cidr_block" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock"></a>

```python
pod_ipv4_cidr_block: str
```

- *Type:* str

---

##### `pod_range`<sup>Required</sup> <a name="pod_range" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRange"></a>

```python
pod_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---


### ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference <a name="ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---


### ContainerNodePoolNodeConfigGcfsConfigOutputReference <a name="ContainerNodePoolNodeConfigGcfsConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigGcfsConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy">reset_gpu_sharing_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu">reset_max_shared_clients_per_gpu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gpu_sharing_strategy` <a name="reset_gpu_sharing_strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy"></a>

```python
def reset_gpu_sharing_strategy() -> None
```

##### `reset_max_shared_clients_per_gpu` <a name="reset_max_shared_clients_per_gpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu"></a>

```python
def reset_max_shared_clients_per_gpu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput">gpu_sharing_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput">max_shared_clients_per_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy">gpu_sharing_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu">max_shared_clients_per_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu_sharing_strategy_input`<sup>Optional</sup> <a name="gpu_sharing_strategy_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput"></a>

```python
gpu_sharing_strategy_input: str
```

- *Type:* str

---

##### `max_shared_clients_per_gpu_input`<sup>Optional</sup> <a name="max_shared_clients_per_gpu_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput"></a>

```python
max_shared_clients_per_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_sharing_strategy`<sup>Required</sup> <a name="gpu_sharing_strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy"></a>

```python
gpu_sharing_strategy: str
```

- *Type:* str

---

##### `max_shared_clients_per_gpu`<sup>Required</sup> <a name="max_shared_clients_per_gpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu"></a>

```python
max_shared_clients_per_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>, cdktf.IResolvable]

---


### ContainerNodePoolNodeConfigGuestAcceleratorList <a name="ContainerNodePoolNodeConfigGuestAcceleratorList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerNodePoolNodeConfigGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]

---


### ContainerNodePoolNodeConfigGuestAcceleratorOutputReference <a name="ContainerNodePoolNodeConfigGuestAcceleratorOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig">put_gpu_sharing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize">reset_gpu_partition_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig">reset_gpu_sharing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gpu_sharing_config` <a name="put_gpu_sharing_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig"></a>

```python
def put_gpu_sharing_config(
  value: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

---

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_gpu_partition_size` <a name="reset_gpu_partition_size" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize"></a>

```python
def reset_gpu_partition_size() -> None
```

##### `reset_gpu_sharing_config` <a name="reset_gpu_sharing_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig"></a>

```python
def reset_gpu_sharing_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig">gpu_sharing_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput">gpu_partition_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput">gpu_sharing_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize">gpu_partition_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu_sharing_config`<sup>Required</sup> <a name="gpu_sharing_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig"></a>

```python
gpu_sharing_config: ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_partition_size_input`<sup>Optional</sup> <a name="gpu_partition_size_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput"></a>

```python
gpu_partition_size_input: str
```

- *Type:* str

---

##### `gpu_sharing_config_input`<sup>Optional</sup> <a name="gpu_sharing_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput"></a>

```python
gpu_sharing_config_input: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_partition_size`<sup>Required</sup> <a name="gpu_partition_size" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize"></a>

```python
gpu_partition_size: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ContainerNodePoolNodeConfigGuestAccelerator, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>, cdktf.IResolvable]

---


### ContainerNodePoolNodeConfigGvnicOutputReference <a name="ContainerNodePoolNodeConfigGvnicOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigGvnic
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---


### ContainerNodePoolNodeConfigKubeletConfigOutputReference <a name="ContainerNodePoolNodeConfigKubeletConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota">reset_cpu_cfs_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">reset_cpu_cfs_quota_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit">reset_pod_pids_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_cfs_quota` <a name="reset_cpu_cfs_quota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```python
def reset_cpu_cfs_quota() -> None
```

##### `reset_cpu_cfs_quota_period` <a name="reset_cpu_cfs_quota_period" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```python
def reset_cpu_cfs_quota_period() -> None
```

##### `reset_pod_pids_limit` <a name="reset_pod_pids_limit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit"></a>

```python
def reset_pod_pids_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput">cpu_cfs_quota_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpu_cfs_quota_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpu_manager_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput">pod_pids_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota">cpu_cfs_quota</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpu_cfs_quota_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy">cpu_manager_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit">pod_pids_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_cfs_quota_input`<sup>Optional</sup> <a name="cpu_cfs_quota_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```python
cpu_cfs_quota_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_cfs_quota_period_input`<sup>Optional</sup> <a name="cpu_cfs_quota_period_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```python
cpu_cfs_quota_period_input: str
```

- *Type:* str

---

##### `cpu_manager_policy_input`<sup>Optional</sup> <a name="cpu_manager_policy_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```python
cpu_manager_policy_input: str
```

- *Type:* str

---

##### `pod_pids_limit_input`<sup>Optional</sup> <a name="pod_pids_limit_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```python
pod_pids_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_cfs_quota`<sup>Required</sup> <a name="cpu_cfs_quota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```python
cpu_cfs_quota: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_cfs_quota_period`<sup>Required</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```python
cpu_cfs_quota_period: str
```

- *Type:* str

---

##### `cpu_manager_policy`<sup>Required</sup> <a name="cpu_manager_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```python
cpu_manager_policy: str
```

- *Type:* str

---

##### `pod_pids_limit`<sup>Required</sup> <a name="pod_pids_limit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit"></a>

```python
pod_pids_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---


### ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference <a name="ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput">sysctls_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls">sysctls</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sysctls_input`<sup>Optional</sup> <a name="sysctls_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput"></a>

```python
sysctls_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls"></a>

```python
sysctls: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigLinuxNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---


### ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference <a name="ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---


### ContainerNodePoolNodeConfigOutputReference <a name="ContainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures">put_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig">put_gcfs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator">put_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic">put_gvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig">put_kubelet_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig">put_linux_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig">put_local_nvme_ssd_block_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint">put_taint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig">put_workload_metadata_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures">reset_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey">reset_boot_disk_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGcfsConfig">reset_gcfs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator">reset_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGvnic">reset_gvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetImageType">reset_image_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetKubeletConfig">reset_kubelet_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig">reset_linux_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig">reset_local_nvme_ssd_block_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount">reset_local_ssd_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLoggingVariant">reset_logging_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform">reset_min_cpu_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetNodeGroup">reset_node_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetPreemptible">reset_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetResourceLabels">reset_resource_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSpot">reset_spot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTaint">reset_taint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig">reset_workload_metadata_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_machine_features` <a name="put_advanced_machine_features" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures"></a>

```python
def put_advanced_machine_features(
  threads_per_core: typing.Union[int, float]
) -> None
```

###### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#threads_per_core ContainerNodePool#threads_per_core}

---

##### `put_gcfs_config` <a name="put_gcfs_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig"></a>

```python
def put_gcfs_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not GCFS is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enabled ContainerNodePool#enabled}

---

##### `put_guest_accelerator` <a name="put_guest_accelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator"></a>

```python
def put_guest_accelerator(
  value: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAccelerator]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]

---

##### `put_gvnic` <a name="put_gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic"></a>

```python
def put_gvnic(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not gvnic is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enabled ContainerNodePool#enabled}

---

##### `put_kubelet_config` <a name="put_kubelet_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig"></a>

```python
def put_kubelet_config(
  cpu_manager_policy: str,
  cpu_cfs_quota: typing.Union[bool, IResolvable] = None,
  cpu_cfs_quota_period: str = None,
  pod_pids_limit: typing.Union[int, float] = None
) -> None
```

###### `cpu_manager_policy`<sup>Required</sup> <a name="cpu_manager_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.cpuManagerPolicy"></a>

- *Type:* str

Control the CPU management policy on the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_manager_policy ContainerNodePool#cpu_manager_policy}

---

###### `cpu_cfs_quota`<sup>Optional</sup> <a name="cpu_cfs_quota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.cpuCfsQuota"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU CFS quota enforcement for containers that specify CPU limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_cfs_quota ContainerNodePool#cpu_cfs_quota}

---

###### `cpu_cfs_quota_period`<sup>Optional</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.cpuCfsQuotaPeriod"></a>

- *Type:* str

Set the CPU CFS quota period value 'cpu.cfs_period_us'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_cfs_quota_period ContainerNodePool#cpu_cfs_quota_period}

---

###### `pod_pids_limit`<sup>Optional</sup> <a name="pod_pids_limit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.podPidsLimit"></a>

- *Type:* typing.Union[int, float]

Controls the maximum number of processes allowed to run in a pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_pids_limit ContainerNodePool#pod_pids_limit}

---

##### `put_linux_node_config` <a name="put_linux_node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig"></a>

```python
def put_linux_node_config(
  sysctls: typing.Mapping[str]
) -> None
```

###### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig.parameter.sysctls"></a>

- *Type:* typing.Mapping[str]

The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#sysctls ContainerNodePool#sysctls}

---

##### `put_local_nvme_ssd_block_config` <a name="put_local_nvme_ssd_block_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig"></a>

```python
def put_local_nvme_ssd_block_config(
  local_ssd_count: typing.Union[int, float]
) -> None
```

###### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Number of raw-block local NVMe SSD disks to be attached to the node.

Each local SSD is 375 GB in size.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
) -> None
```

###### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.consumeReservationType"></a>

- *Type:* str

Corresponds to the type of reservation consumption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#consume_reservation_type ContainerNodePool#consume_reservation_type}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.key"></a>

- *Type:* str

The label key of a reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#key ContainerNodePool#key}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.values"></a>

- *Type:* typing.List[str]

The label values of the reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#values ContainerNodePool#values}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_integrity_monitoring ContainerNodePool#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_secure_boot ContainerNodePool#enable_secure_boot}

---

##### `put_taint` <a name="put_taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint"></a>

```python
def put_taint(
  value: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigTaint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]

---

##### `put_workload_metadata_config` <a name="put_workload_metadata_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig"></a>

```python
def put_workload_metadata_config(
  mode: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig.parameter.mode"></a>

- *Type:* str

Mode is the configuration for how to expose metadata to workloads running on the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#mode ContainerNodePool#mode}

---

##### `reset_advanced_machine_features` <a name="reset_advanced_machine_features" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures"></a>

```python
def reset_advanced_machine_features() -> None
```

##### `reset_boot_disk_kms_key` <a name="reset_boot_disk_kms_key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey"></a>

```python
def reset_boot_disk_kms_key() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_gcfs_config` <a name="reset_gcfs_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGcfsConfig"></a>

```python
def reset_gcfs_config() -> None
```

##### `reset_guest_accelerator` <a name="reset_guest_accelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator"></a>

```python
def reset_guest_accelerator() -> None
```

##### `reset_gvnic` <a name="reset_gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGvnic"></a>

```python
def reset_gvnic() -> None
```

##### `reset_image_type` <a name="reset_image_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetImageType"></a>

```python
def reset_image_type() -> None
```

##### `reset_kubelet_config` <a name="reset_kubelet_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetKubeletConfig"></a>

```python
def reset_kubelet_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_linux_node_config` <a name="reset_linux_node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig"></a>

```python
def reset_linux_node_config() -> None
```

##### `reset_local_nvme_ssd_block_config` <a name="reset_local_nvme_ssd_block_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig"></a>

```python
def reset_local_nvme_ssd_block_config() -> None
```

##### `reset_local_ssd_count` <a name="reset_local_ssd_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount"></a>

```python
def reset_local_ssd_count() -> None
```

##### `reset_logging_variant` <a name="reset_logging_variant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLoggingVariant"></a>

```python
def reset_logging_variant() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_min_cpu_platform` <a name="reset_min_cpu_platform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform"></a>

```python
def reset_min_cpu_platform() -> None
```

##### `reset_node_group` <a name="reset_node_group" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetNodeGroup"></a>

```python
def reset_node_group() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```

##### `reset_preemptible` <a name="reset_preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetPreemptible"></a>

```python
def reset_preemptible() -> None
```

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```

##### `reset_resource_labels` <a name="reset_resource_labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetResourceLabels"></a>

```python
def reset_resource_labels() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_spot` <a name="reset_spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSpot"></a>

```python
def reset_spot() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_taint` <a name="reset_taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTaint"></a>

```python
def reset_taint() -> None
```

##### `reset_workload_metadata_config` <a name="reset_workload_metadata_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig"></a>

```python
def reset_workload_metadata_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfig">gcfs_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference">ContainerNodePoolNodeConfigGcfsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAccelerator">guest_accelerator</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList">ContainerNodePoolNodeConfigGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference">ContainerNodePoolNodeConfigGvnicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfig">kubelet_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference">ContainerNodePoolNodeConfigKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig">linux_node_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig">local_nvme_ssd_block_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference">ContainerNodePoolNodeConfigReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList">ContainerNodePoolNodeConfigTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig">workload_metadata_config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput">advanced_machine_features_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput">boot_disk_kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput">gcfs_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput">guest_accelerator_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnicInput">gvnic_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput">kubelet_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput">linux_node_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput">local_nvme_ssd_block_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput">logging_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput">min_cpu_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput">node_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptibleInput">preemptible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput">resource_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spotInput">spot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taintInput">taint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput">workload_metadata_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey">boot_disk_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariant">logging_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroup">node_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabels">resource_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spot">spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a>

---

##### `gcfs_config`<sup>Required</sup> <a name="gcfs_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfig"></a>

```python
gcfs_config: ContainerNodePoolNodeConfigGcfsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference">ContainerNodePoolNodeConfigGcfsConfigOutputReference</a>

---

##### `guest_accelerator`<sup>Required</sup> <a name="guest_accelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAccelerator"></a>

```python
guest_accelerator: ContainerNodePoolNodeConfigGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList">ContainerNodePoolNodeConfigGuestAcceleratorList</a>

---

##### `gvnic`<sup>Required</sup> <a name="gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnic"></a>

```python
gvnic: ContainerNodePoolNodeConfigGvnicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference">ContainerNodePoolNodeConfigGvnicOutputReference</a>

---

##### `kubelet_config`<sup>Required</sup> <a name="kubelet_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfig"></a>

```python
kubelet_config: ContainerNodePoolNodeConfigKubeletConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference">ContainerNodePoolNodeConfigKubeletConfigOutputReference</a>

---

##### `linux_node_config`<sup>Required</sup> <a name="linux_node_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig"></a>

```python
linux_node_config: ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a>

---

##### `local_nvme_ssd_block_config`<sup>Required</sup> <a name="local_nvme_ssd_block_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig"></a>

```python
local_nvme_ssd_block_config: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a>

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinity"></a>

```python
reservation_affinity: ContainerNodePoolNodeConfigReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference">ContainerNodePoolNodeConfigReservationAffinityOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taint"></a>

```python
taint: ContainerNodePoolNodeConfigTaintList
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList">ContainerNodePoolNodeConfigTaintList</a>

---

##### `workload_metadata_config`<sup>Required</sup> <a name="workload_metadata_config" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig"></a>

```python
workload_metadata_config: ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a>

---

##### `advanced_machine_features_input`<sup>Optional</sup> <a name="advanced_machine_features_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput"></a>

```python
advanced_machine_features_input: ContainerNodePoolNodeConfigAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `boot_disk_kms_key_input`<sup>Optional</sup> <a name="boot_disk_kms_key_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput"></a>

```python
boot_disk_kms_key_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `gcfs_config_input`<sup>Optional</sup> <a name="gcfs_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput"></a>

```python
gcfs_config_input: ContainerNodePoolNodeConfigGcfsConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `guest_accelerator_input`<sup>Optional</sup> <a name="guest_accelerator_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput"></a>

```python
guest_accelerator_input: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>]]

---

##### `gvnic_input`<sup>Optional</sup> <a name="gvnic_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnicInput"></a>

```python
gvnic_input: ContainerNodePoolNodeConfigGvnic
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `kubelet_config_input`<sup>Optional</sup> <a name="kubelet_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput"></a>

```python
kubelet_config_input: ContainerNodePoolNodeConfigKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `linux_node_config_input`<sup>Optional</sup> <a name="linux_node_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput"></a>

```python
linux_node_config_input: ContainerNodePoolNodeConfigLinuxNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `local_nvme_ssd_block_config_input`<sup>Optional</sup> <a name="local_nvme_ssd_block_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput"></a>

```python
local_nvme_ssd_block_config_input: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logging_variant_input`<sup>Optional</sup> <a name="logging_variant_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput"></a>

```python
logging_variant_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `min_cpu_platform_input`<sup>Optional</sup> <a name="min_cpu_platform_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput"></a>

```python
min_cpu_platform_input: str
```

- *Type:* str

---

##### `node_group_input`<sup>Optional</sup> <a name="node_group_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput"></a>

```python
node_group_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible_input`<sup>Optional</sup> <a name="preemptible_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptibleInput"></a>

```python
preemptible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: ContainerNodePoolNodeConfigReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `resource_labels_input`<sup>Optional</sup> <a name="resource_labels_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput"></a>

```python
resource_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: ContainerNodePoolNodeConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `spot_input`<sup>Optional</sup> <a name="spot_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spotInput"></a>

```python
spot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `taint_input`<sup>Optional</sup> <a name="taint_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taintInput"></a>

```python
taint_input: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]

---

##### `workload_metadata_config_input`<sup>Optional</sup> <a name="workload_metadata_config_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput"></a>

```python
workload_metadata_config_input: ContainerNodePoolNodeConfigWorkloadMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `boot_disk_kms_key`<sup>Required</sup> <a name="boot_disk_kms_key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey"></a>

```python
boot_disk_kms_key: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logging_variant`<sup>Required</sup> <a name="logging_variant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariant"></a>

```python
logging_variant: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `node_group`<sup>Required</sup> <a name="node_group" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroup"></a>

```python
node_group: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_labels`<sup>Required</sup> <a name="resource_labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabels"></a>

```python
resource_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `spot`<sup>Required</sup> <a name="spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spot"></a>

```python
spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---


### ContainerNodePoolNodeConfigReservationAffinityOutputReference <a name="ContainerNodePoolNodeConfigReservationAffinityOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput">consume_reservation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consume_reservation_type_input`<sup>Optional</sup> <a name="consume_reservation_type_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```python
consume_reservation_type_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---


### ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference <a name="ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---


### ContainerNodePoolNodeConfigTaintList <a name="ContainerNodePoolNodeConfigTaintList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigTaintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerNodePoolNodeConfigTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerNodePoolNodeConfigTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>]]

---


### ContainerNodePoolNodeConfigTaintOutputReference <a name="ContainerNodePoolNodeConfigTaintOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ContainerNodePoolNodeConfigTaint, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>, cdktf.IResolvable]

---


### ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference <a name="ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolNodeConfigWorkloadMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---


### ContainerNodePoolPlacementPolicyOutputReference <a name="ContainerNodePoolPlacementPolicyOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolPlacementPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---


### ContainerNodePoolTimeoutsOutputReference <a name="ContainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ContainerNodePoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>, cdktf.IResolvable]

---


### ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy">put_standard_rollout_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration">reset_node_pool_soak_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_standard_rollout_policy` <a name="put_standard_rollout_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy"></a>

```python
def put_standard_rollout_policy(
  batch_node_count: typing.Union[int, float] = None,
  batch_percentage: typing.Union[int, float] = None,
  batch_soak_duration: str = None
) -> None
```

###### `batch_node_count`<sup>Optional</sup> <a name="batch_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.batchNodeCount"></a>

- *Type:* typing.Union[int, float]

Number of blue nodes to drain in a batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_node_count ContainerNodePool#batch_node_count}

---

###### `batch_percentage`<sup>Optional</sup> <a name="batch_percentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.batchPercentage"></a>

- *Type:* typing.Union[int, float]

Percentage of the blue pool nodes to drain in a batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_percentage ContainerNodePool#batch_percentage}

---

###### `batch_soak_duration`<sup>Optional</sup> <a name="batch_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.batchSoakDuration"></a>

- *Type:* str

Soak time after each batch gets drained.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_soak_duration ContainerNodePool#batch_soak_duration}

---

##### `reset_node_pool_soak_duration` <a name="reset_node_pool_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration"></a>

```python
def reset_node_pool_soak_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy">standard_rollout_policy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput">node_pool_soak_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput">standard_rollout_policy_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration">node_pool_soak_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_rollout_policy`<sup>Required</sup> <a name="standard_rollout_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy"></a>

```python
standard_rollout_policy: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a>

---

##### `node_pool_soak_duration_input`<sup>Optional</sup> <a name="node_pool_soak_duration_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput"></a>

```python
node_pool_soak_duration_input: str
```

- *Type:* str

---

##### `standard_rollout_policy_input`<sup>Optional</sup> <a name="standard_rollout_policy_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput"></a>

```python
standard_rollout_policy_input: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `node_pool_soak_duration`<sup>Required</sup> <a name="node_pool_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration"></a>

```python
node_pool_soak_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolUpgradeSettingsBlueGreenSettings
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---


### ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount">reset_batch_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage">reset_batch_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration">reset_batch_soak_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_node_count` <a name="reset_batch_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount"></a>

```python
def reset_batch_node_count() -> None
```

##### `reset_batch_percentage` <a name="reset_batch_percentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage"></a>

```python
def reset_batch_percentage() -> None
```

##### `reset_batch_soak_duration` <a name="reset_batch_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration"></a>

```python
def reset_batch_soak_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput">batch_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput">batch_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput">batch_soak_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount">batch_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage">batch_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration">batch_soak_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_node_count_input`<sup>Optional</sup> <a name="batch_node_count_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput"></a>

```python
batch_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_percentage_input`<sup>Optional</sup> <a name="batch_percentage_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```python
batch_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_soak_duration_input`<sup>Optional</sup> <a name="batch_soak_duration_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput"></a>

```python
batch_soak_duration_input: str
```

- *Type:* str

---

##### `batch_node_count`<sup>Required</sup> <a name="batch_node_count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount"></a>

```python
batch_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_percentage`<sup>Required</sup> <a name="batch_percentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage"></a>

```python
batch_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_soak_duration`<sup>Required</sup> <a name="batch_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration"></a>

```python
batch_soak_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---


### ContainerNodePoolUpgradeSettingsOutputReference <a name="ContainerNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_node_pool

containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings">put_blue_green_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings">reset_blue_green_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge">reset_max_surge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable">reset_max_unavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetStrategy">reset_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_blue_green_settings` <a name="put_blue_green_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings"></a>

```python
def put_blue_green_settings(
  standard_rollout_policy: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy,
  node_pool_soak_duration: str = None
) -> None
```

###### `standard_rollout_policy`<sup>Required</sup> <a name="standard_rollout_policy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings.parameter.standardRolloutPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

standard_rollout_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#standard_rollout_policy ContainerNodePool#standard_rollout_policy}

---

###### `node_pool_soak_duration`<sup>Optional</sup> <a name="node_pool_soak_duration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings.parameter.nodePoolSoakDuration"></a>

- *Type:* str

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_pool_soak_duration ContainerNodePool#node_pool_soak_duration}

---

##### `reset_blue_green_settings` <a name="reset_blue_green_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings"></a>

```python
def reset_blue_green_settings() -> None
```

##### `reset_max_surge` <a name="reset_max_surge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge"></a>

```python
def reset_max_surge() -> None
```

##### `reset_max_unavailable` <a name="reset_max_unavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable"></a>

```python
def reset_max_unavailable() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetStrategy"></a>

```python
def reset_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings">blue_green_settings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput">blue_green_settings_input</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">max_surge_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput">max_unavailable_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge">max_surge</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable">max_unavailable</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blue_green_settings`<sup>Required</sup> <a name="blue_green_settings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings"></a>

```python
blue_green_settings: ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a>

---

##### `blue_green_settings_input`<sup>Optional</sup> <a name="blue_green_settings_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput"></a>

```python
blue_green_settings_input: ContainerNodePoolUpgradeSettingsBlueGreenSettings
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `max_surge_input`<sup>Optional</sup> <a name="max_surge_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```python
max_surge_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_input`<sup>Optional</sup> <a name="max_unavailable_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput"></a>

```python
max_unavailable_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `max_surge`<sup>Required</sup> <a name="max_surge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```python
max_surge: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable`<sup>Required</sup> <a name="max_unavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable"></a>

```python
max_unavailable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---



