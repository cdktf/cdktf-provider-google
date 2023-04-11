# `containerNodePool` Submodule <a name="`containerNodePool` Submodule" id="@cdktf/provider-google.containerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerNodePool <a name="ContainerNodePool" id="@cdktf/provider-google.containerNodePool.ContainerNodePool"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/container_node_pool google_container_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePool;

ContainerNodePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
//  .autoscaling(ContainerNodePoolAutoscaling)
//  .id(java.lang.String)
//  .initialNodeCount(java.lang.Number)
//  .location(java.lang.String)
//  .management(ContainerNodePoolManagement)
//  .maxPodsPerNode(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .networkConfig(ContainerNodePoolNetworkConfig)
//  .nodeConfig(ContainerNodePoolNodeConfig)
//  .nodeCount(java.lang.Number)
//  .nodeLocations(java.util.List<java.lang.String>)
//  .placementPolicy(ContainerNodePoolPlacementPolicy)
//  .project(java.lang.String)
//  .timeouts(ContainerNodePoolTimeouts)
//  .upgradeSettings(ContainerNodePoolUpgradeSettings)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.initialNodeCount">initialNodeCount</a></code> | <code>java.lang.Number</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeLocations">nodeLocations</a></code> | <code>java.util.List<java.lang.String></code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.placementPolicy">placementPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version for the nodes in this pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cluster ContainerNodePool#cluster}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.autoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#autoscaling ContainerNodePool#autoscaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialNodeCount`<sup>Optional</sup> <a name="initialNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.initialNodeCount"></a>

- *Type:* java.lang.Number

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#initial_node_count ContainerNodePool#initial_node_count}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#location ContainerNodePool#location}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.management"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#management ContainerNodePool#management}

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.maxPodsPerNode"></a>

- *Type:* java.lang.Number

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_pods_per_node ContainerNodePool#max_pods_per_node}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name ContainerNodePool#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name_prefix ContainerNodePool#name_prefix}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#network_config ContainerNodePool#network_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_config ContainerNodePool#node_config}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_count ContainerNodePool#node_count}

---

##### `nodeLocations`<sup>Optional</sup> <a name="nodeLocations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.nodeLocations"></a>

- *Type:* java.util.List<java.lang.String>

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_locations ContainerNodePool#node_locations}

---

##### `placementPolicy`<sup>Optional</sup> <a name="placementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.placementPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#placement_policy ContainerNodePool#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#project ContainerNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#timeouts ContainerNodePool#timeouts}

---

##### `upgradeSettings`<sup>Optional</sup> <a name="upgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.upgradeSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#upgrade_settings ContainerNodePool#upgrade_settings}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#version ContainerNodePool#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy">putPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings">putUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetAutoscaling">resetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetInitialNodeCount">resetInitialNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeLocations">resetNodeLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetPlacementPolicy">resetPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetUpgradeSettings">resetUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling"></a>

```java
public void putAutoscaling(ContainerNodePoolAutoscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement"></a>

```java
public void putManagement(ContainerNodePoolManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig"></a>

```java
public void putNetworkConfig(ContainerNodePoolNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig"></a>

```java
public void putNodeConfig(ContainerNodePoolNodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---

##### `putPlacementPolicy` <a name="putPlacementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy"></a>

```java
public void putPlacementPolicy(ContainerNodePoolPlacementPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts"></a>

```java
public void putTimeouts(ContainerNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

---

##### `putUpgradeSettings` <a name="putUpgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings"></a>

```java
public void putUpgradeSettings(ContainerNodePoolUpgradeSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---

##### `resetAutoscaling` <a name="resetAutoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetAutoscaling"></a>

```java
public void resetAutoscaling()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetInitialNodeCount` <a name="resetInitialNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetInitialNodeCount"></a>

```java
public void resetInitialNodeCount()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetManagement"></a>

```java
public void resetManagement()
```

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetMaxPodsPerNode"></a>

```java
public void resetMaxPodsPerNode()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeConfig"></a>

```java
public void resetNodeConfig()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetNodeLocations` <a name="resetNodeLocations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeLocations"></a>

```java
public void resetNodeLocations()
```

##### `resetPlacementPolicy` <a name="resetPlacementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetPlacementPolicy"></a>

```java
public void resetPlacementPolicy()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgradeSettings` <a name="resetUpgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetUpgradeSettings"></a>

```java
public void resetUpgradeSettings()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePool;

ContainerNodePool.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePool;

ContainerNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePool;

ContainerNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference">ContainerNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.instanceGroupUrls">instanceGroupUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managedInstanceGroupUrls">managedInstanceGroupUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference">ContainerNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference">ContainerNodePoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference">ContainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicy">placementPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference">ContainerNodePoolPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference">ContainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference">ContainerNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCountInput">initialNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managementInput">managementInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocationsInput">nodeLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicyInput">placementPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettingsInput">upgradeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCount">initialNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocations">nodeLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscaling"></a>

```java
public ContainerNodePoolAutoscalingOutputReference getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference">ContainerNodePoolAutoscalingOutputReference</a>

---

##### `instanceGroupUrls`<sup>Required</sup> <a name="instanceGroupUrls" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.instanceGroupUrls"></a>

```java
public java.util.List<java.lang.String> getInstanceGroupUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managedInstanceGroupUrls`<sup>Required</sup> <a name="managedInstanceGroupUrls" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managedInstanceGroupUrls"></a>

```java
public java.util.List<java.lang.String> getManagedInstanceGroupUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.management"></a>

```java
public ContainerNodePoolManagementOutputReference getManagement();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference">ContainerNodePoolManagementOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfig"></a>

```java
public ContainerNodePoolNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference">ContainerNodePoolNetworkConfigOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfig"></a>

```java
public ContainerNodePoolNodeConfigOutputReference getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference">ContainerNodePoolNodeConfigOutputReference</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `placementPolicy`<sup>Required</sup> <a name="placementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicy"></a>

```java
public ContainerNodePoolPlacementPolicyOutputReference getPlacementPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference">ContainerNodePoolPlacementPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeouts"></a>

```java
public ContainerNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference">ContainerNodePoolTimeoutsOutputReference</a>

---

##### `upgradeSettings`<sup>Required</sup> <a name="upgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettings"></a>

```java
public ContainerNodePoolUpgradeSettingsOutputReference getUpgradeSettings();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference">ContainerNodePoolUpgradeSettingsOutputReference</a>

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscalingInput"></a>

```java
public ContainerNodePoolAutoscaling getAutoscalingInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialNodeCountInput`<sup>Optional</sup> <a name="initialNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCountInput"></a>

```java
public java.lang.Number getInitialNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managementInput"></a>

```java
public ContainerNodePoolManagement getManagementInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNodeInput"></a>

```java
public java.lang.Number getMaxPodsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfigInput"></a>

```java
public ContainerNodePoolNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfigInput"></a>

```java
public ContainerNodePoolNodeConfig getNodeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeLocationsInput`<sup>Optional</sup> <a name="nodeLocationsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocationsInput"></a>

```java
public java.util.List<java.lang.String> getNodeLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `placementPolicyInput`<sup>Optional</sup> <a name="placementPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicyInput"></a>

```java
public ContainerNodePoolPlacementPolicy getPlacementPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `upgradeSettingsInput`<sup>Optional</sup> <a name="upgradeSettingsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettingsInput"></a>

```java
public ContainerNodePoolUpgradeSettings getUpgradeSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialNodeCount`<sup>Required</sup> <a name="initialNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCount"></a>

```java
public java.lang.Number getInitialNodeCount();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeLocations`<sup>Required</sup> <a name="nodeLocations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocations"></a>

```java
public java.util.List<java.lang.String> getNodeLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerNodePoolAutoscaling <a name="ContainerNodePoolAutoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolAutoscaling;

ContainerNodePoolAutoscaling.builder()
//  .locationPolicy(java.lang.String)
//  .maxNodeCount(java.lang.Number)
//  .minNodeCount(java.lang.Number)
//  .totalMaxNodeCount(java.lang.Number)
//  .totalMinNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.locationPolicy">locationPolicy</a></code> | <code>java.lang.String</code> | Location policy specifies the algorithm used when scaling-up the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | Maximum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | Minimum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMaxNodeCount">totalMaxNodeCount</a></code> | <code>java.lang.Number</code> | Maximum number of all nodes in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMinNodeCount">totalMinNodeCount</a></code> | <code>java.lang.Number</code> | Minimum number of all nodes in the node pool. |

---

##### `locationPolicy`<sup>Optional</sup> <a name="locationPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.locationPolicy"></a>

```java
public java.lang.String getLocationPolicy();
```

- *Type:* java.lang.String

Location policy specifies the algorithm used when scaling-up the node pool.

"BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#location_policy ContainerNodePool#location_policy}

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

Maximum number of nodes per zone in the node pool.

Must be >= min_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_node_count ContainerNodePool#max_node_count}

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

Minimum number of nodes per zone in the node pool.

Must be >=0 and <= max_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#min_node_count ContainerNodePool#min_node_count}

---

##### `totalMaxNodeCount`<sup>Optional</sup> <a name="totalMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMaxNodeCount"></a>

```java
public java.lang.Number getTotalMaxNodeCount();
```

- *Type:* java.lang.Number

Maximum number of all nodes in the node pool.

Must be >= total_min_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#total_max_node_count ContainerNodePool#total_max_node_count}

---

##### `totalMinNodeCount`<sup>Optional</sup> <a name="totalMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMinNodeCount"></a>

```java
public java.lang.Number getTotalMinNodeCount();
```

- *Type:* java.lang.Number

Minimum number of all nodes in the node pool.

Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#total_min_node_count ContainerNodePool#total_min_node_count}

---

### ContainerNodePoolConfig <a name="ContainerNodePoolConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolConfig;

ContainerNodePoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
//  .autoscaling(ContainerNodePoolAutoscaling)
//  .id(java.lang.String)
//  .initialNodeCount(java.lang.Number)
//  .location(java.lang.String)
//  .management(ContainerNodePoolManagement)
//  .maxPodsPerNode(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .networkConfig(ContainerNodePoolNetworkConfig)
//  .nodeConfig(ContainerNodePoolNodeConfig)
//  .nodeCount(java.lang.Number)
//  .nodeLocations(java.util.List<java.lang.String>)
//  .placementPolicy(ContainerNodePoolPlacementPolicy)
//  .project(java.lang.String)
//  .timeouts(ContainerNodePoolTimeouts)
//  .upgradeSettings(ContainerNodePoolUpgradeSettings)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.initialNodeCount">initialNodeCount</a></code> | <code>java.lang.Number</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeLocations">nodeLocations</a></code> | <code>java.util.List<java.lang.String></code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.placementPolicy">placementPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version for the nodes in this pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cluster ContainerNodePool#cluster}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.autoscaling"></a>

```java
public ContainerNodePoolAutoscaling getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#autoscaling ContainerNodePool#autoscaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#id ContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialNodeCount`<sup>Optional</sup> <a name="initialNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.initialNodeCount"></a>

```java
public java.lang.Number getInitialNodeCount();
```

- *Type:* java.lang.Number

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#initial_node_count ContainerNodePool#initial_node_count}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#location ContainerNodePool#location}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.management"></a>

```java
public ContainerNodePoolManagement getManagement();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#management ContainerNodePool#management}

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_pods_per_node ContainerNodePool#max_pods_per_node}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name ContainerNodePool#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#name_prefix ContainerNodePool#name_prefix}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.networkConfig"></a>

```java
public ContainerNodePoolNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#network_config ContainerNodePool#network_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeConfig"></a>

```java
public ContainerNodePoolNodeConfig getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_config ContainerNodePool#node_config}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_count ContainerNodePool#node_count}

---

##### `nodeLocations`<sup>Optional</sup> <a name="nodeLocations" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeLocations"></a>

```java
public java.util.List<java.lang.String> getNodeLocations();
```

- *Type:* java.util.List<java.lang.String>

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_locations ContainerNodePool#node_locations}

---

##### `placementPolicy`<sup>Optional</sup> <a name="placementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.placementPolicy"></a>

```java
public ContainerNodePoolPlacementPolicy getPlacementPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#placement_policy ContainerNodePool#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#project ContainerNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.timeouts"></a>

```java
public ContainerNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#timeouts ContainerNodePool#timeouts}

---

##### `upgradeSettings`<sup>Optional</sup> <a name="upgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.upgradeSettings"></a>

```java
public ContainerNodePoolUpgradeSettings getUpgradeSettings();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#upgrade_settings ContainerNodePool#upgrade_settings}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#version ContainerNodePool#version}

---

### ContainerNodePoolManagement <a name="ContainerNodePoolManagement" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolManagement;

ContainerNodePoolManagement.builder()
//  .autoRepair(java.lang.Boolean)
//  .autoRepair(IResolvable)
//  .autoUpgrade(java.lang.Boolean)
//  .autoUpgrade(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoRepair">autoRepair</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the nodes will be automatically repaired. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the nodes will be automatically upgraded. |

---

##### `autoRepair`<sup>Optional</sup> <a name="autoRepair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoRepair"></a>

```java
public java.lang.Object getAutoRepair();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#auto_repair ContainerNodePool#auto_repair}

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoUpgrade"></a>

```java
public java.lang.Object getAutoUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the nodes will be automatically upgraded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#auto_upgrade ContainerNodePool#auto_upgrade}

---

### ContainerNodePoolNetworkConfig <a name="ContainerNodePoolNetworkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNetworkConfig;

ContainerNodePoolNetworkConfig.builder()
//  .createPodRange(java.lang.Boolean)
//  .createPodRange(IResolvable)
//  .enablePrivateNodes(java.lang.Boolean)
//  .enablePrivateNodes(IResolvable)
//  .podIpv4CidrBlock(java.lang.String)
//  .podRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.createPodRange">createPodRange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to create a new range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.enablePrivateNodes">enablePrivateNodes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether nodes have internal IP addresses only. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podIpv4CidrBlock">podIpv4CidrBlock</a></code> | <code>java.lang.String</code> | The IP address range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podRange">podRange</a></code> | <code>java.lang.String</code> | The ID of the secondary range for pod IPs. |

---

##### `createPodRange`<sup>Optional</sup> <a name="createPodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.createPodRange"></a>

```java
public java.lang.Object getCreatePodRange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to create a new range for pod IPs in this node pool.

Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create_pod_range ContainerNodePool#create_pod_range}

---

##### `enablePrivateNodes`<sup>Optional</sup> <a name="enablePrivateNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.enablePrivateNodes"></a>

```java
public java.lang.Object getEnablePrivateNodes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether nodes have internal IP addresses only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_private_nodes ContainerNodePool#enable_private_nodes}

---

##### `podIpv4CidrBlock`<sup>Optional</sup> <a name="podIpv4CidrBlock" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podIpv4CidrBlock"></a>

```java
public java.lang.String getPodIpv4CidrBlock();
```

- *Type:* java.lang.String

The IP address range for pod IPs in this node pool.

Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_ipv4_cidr_block ContainerNodePool#pod_ipv4_cidr_block}

---

##### `podRange`<sup>Optional</sup> <a name="podRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podRange"></a>

```java
public java.lang.String getPodRange();
```

- *Type:* java.lang.String

The ID of the secondary range for pod IPs.

If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_range ContainerNodePool#pod_range}

---

### ContainerNodePoolNodeConfig <a name="ContainerNodePoolNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfig;

ContainerNodePoolNodeConfig.builder()
//  .advancedMachineFeatures(ContainerNodePoolNodeConfigAdvancedMachineFeatures)
//  .bootDiskKmsKey(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .diskType(java.lang.String)
//  .ephemeralStorageLocalSsdConfig(ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig)
//  .gcfsConfig(ContainerNodePoolNodeConfigGcfsConfig)
//  .guestAccelerator(IResolvable)
//  .guestAccelerator(java.util.List<ContainerNodePoolNodeConfigGuestAccelerator>)
//  .gvnic(ContainerNodePoolNodeConfigGvnic)
//  .imageType(java.lang.String)
//  .kubeletConfig(ContainerNodePoolNodeConfigKubeletConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .linuxNodeConfig(ContainerNodePoolNodeConfigLinuxNodeConfig)
//  .localNvmeSsdBlockConfig(ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig)
//  .localSsdCount(java.lang.Number)
//  .loggingVariant(java.lang.String)
//  .machineType(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .minCpuPlatform(java.lang.String)
//  .nodeGroup(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
//  .preemptible(java.lang.Boolean)
//  .preemptible(IResolvable)
//  .reservationAffinity(ContainerNodePoolNodeConfigReservationAffinity)
//  .resourceLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .serviceAccount(java.lang.String)
//  .shieldedInstanceConfig(ContainerNodePoolNodeConfigShieldedInstanceConfig)
//  .spot(java.lang.Boolean)
//  .spot(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .taint(IResolvable)
//  .taint(java.util.List<ContainerNodePoolNodeConfigTaint>)
//  .workloadMetadataConfig(ContainerNodePoolNodeConfigWorkloadMetadataConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.bootDiskKmsKey">bootDiskKmsKey</a></code> | <code>java.lang.String</code> | The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig">ephemeralStorageLocalSsdConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | ephemeral_storage_local_ssd_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gcfsConfig">gcfsConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | gcfs_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>></code> | List of the type and count of accelerator cards attached to the instance. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | gvnic block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.imageType">imageType</a></code> | <code>java.lang.String</code> | The image type to use for this node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.linuxNodeConfig">linuxNodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | linux_node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig">localNvmeSsdBlockConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | local_nvme_ssd_block_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | The number of local SSD disks to be attached to the node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.loggingVariant">loggingVariant</a></code> | <code>java.lang.String</code> | Type of logging agent that is used as the default value for node pools in the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The name of a Google Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata key/value pairs assigned to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | Minimum CPU platform to be used by this instance. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.nodeGroup">nodeGroup</a></code> | <code>java.lang.String</code> | Setting this field will assign instances of this pool to run on the specified node group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | The set of Google API scopes to be made available on all of the node VMs. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the nodes are created as preemptible VM instances. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.resourceLabels">resourceLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The GCE resource labels (a map of key/value pairs) to be applied to the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.spot">spot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the nodes are created as spot VM instances. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The list of instance tags applied to all nodes. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.taint">taint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>></code> | List of Kubernetes taints to be applied to each node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.workloadMetadataConfig">workloadMetadataConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | workload_metadata_config block. |

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.advancedMachineFeatures"></a>

```java
public ContainerNodePoolNodeConfigAdvancedMachineFeatures getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#advanced_machine_features ContainerNodePool#advanced_machine_features}

---

##### `bootDiskKmsKey`<sup>Optional</sup> <a name="bootDiskKmsKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.bootDiskKmsKey"></a>

```java
public java.lang.String getBootDiskKmsKey();
```

- *Type:* java.lang.String

The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#boot_disk_kms_key ContainerNodePool#boot_disk_kms_key}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#disk_size_gb ContainerNodePool#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#disk_type ContainerNodePool#disk_type}

---

##### `ephemeralStorageLocalSsdConfig`<sup>Optional</sup> <a name="ephemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig"></a>

```java
public ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig getEphemeralStorageLocalSsdConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

ephemeral_storage_local_ssd_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#ephemeral_storage_local_ssd_config ContainerNodePool#ephemeral_storage_local_ssd_config}

---

##### `gcfsConfig`<sup>Optional</sup> <a name="gcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gcfsConfig"></a>

```java
public ContainerNodePoolNodeConfigGcfsConfig getGcfsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

gcfs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gcfs_config ContainerNodePool#gcfs_config}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.guestAccelerator"></a>

```java
public java.lang.Object getGuestAccelerator();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>>

List of the type and count of accelerator cards attached to the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#guest_accelerator ContainerNodePool#guest_accelerator}

---

##### `gvnic`<sup>Optional</sup> <a name="gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gvnic"></a>

```java
public ContainerNodePoolNodeConfigGvnic getGvnic();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

gvnic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gvnic ContainerNodePool#gvnic}

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

The image type to use for this node.

Note that for a given image type, the latest version of it will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#image_type ContainerNodePool#image_type}

---

##### `kubeletConfig`<sup>Optional</sup> <a name="kubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.kubeletConfig"></a>

```java
public ContainerNodePoolNodeConfigKubeletConfig getKubeletConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#kubelet_config ContainerNodePool#kubelet_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that Kubernetes may apply to the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#labels ContainerNodePool#labels}

---

##### `linuxNodeConfig`<sup>Optional</sup> <a name="linuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.linuxNodeConfig"></a>

```java
public ContainerNodePoolNodeConfigLinuxNodeConfig getLinuxNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

linux_node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#linux_node_config ContainerNodePool#linux_node_config}

---

##### `localNvmeSsdBlockConfig`<sup>Optional</sup> <a name="localNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig"></a>

```java
public ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig getLocalNvmeSsdBlockConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

local_nvme_ssd_block_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_nvme_ssd_block_config ContainerNodePool#local_nvme_ssd_block_config}

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

The number of local SSD disks to be attached to the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

##### `loggingVariant`<sup>Optional</sup> <a name="loggingVariant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.loggingVariant"></a>

```java
public java.lang.String getLoggingVariant();
```

- *Type:* java.lang.String

Type of logging agent that is used as the default value for node pools in the cluster.

Valid values include DEFAULT and MAX_THROUGHPUT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#logging_variant ContainerNodePool#logging_variant}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The name of a Google Compute Engine machine type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#machine_type ContainerNodePool#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata key/value pairs assigned to instances in the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#metadata ContainerNodePool#metadata}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or newer CPU platform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#min_cpu_platform ContainerNodePool#min_cpu_platform}

---

##### `nodeGroup`<sup>Optional</sup> <a name="nodeGroup" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.nodeGroup"></a>

```java
public java.lang.String getNodeGroup();
```

- *Type:* java.lang.String

Setting this field will assign instances of this pool to run on the specified node group.

This is useful for running workloads on sole tenant nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_group ContainerNodePool#node_group}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

The set of Google API scopes to be made available on all of the node VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#oauth_scopes ContainerNodePool#oauth_scopes}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the nodes are created as preemptible VM instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#preemptible ContainerNodePool#preemptible}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.reservationAffinity"></a>

```java
public ContainerNodePoolNodeConfigReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#reservation_affinity ContainerNodePool#reservation_affinity}

---

##### `resourceLabels`<sup>Optional</sup> <a name="resourceLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.resourceLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The GCE resource labels (a map of key/value pairs) to be applied to the node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#resource_labels ContainerNodePool#resource_labels}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The Google Cloud Platform Service Account to be used by the node VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#service_account ContainerNodePool#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.shieldedInstanceConfig"></a>

```java
public ContainerNodePoolNodeConfigShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#shielded_instance_config ContainerNodePool#shielded_instance_config}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.spot"></a>

```java
public java.lang.Object getSpot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the nodes are created as spot VM instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#spot ContainerNodePool#spot}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The list of instance tags applied to all nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#tags ContainerNodePool#tags}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.taint"></a>

```java
public java.lang.Object getTaint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>>

List of Kubernetes taints to be applied to each node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#taint ContainerNodePool#taint}

---

##### `workloadMetadataConfig`<sup>Optional</sup> <a name="workloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.workloadMetadataConfig"></a>

```java
public ContainerNodePoolNodeConfigWorkloadMetadataConfig getWorkloadMetadataConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

workload_metadata_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#workload_metadata_config ContainerNodePool#workload_metadata_config}

---

### ContainerNodePoolNodeConfigAdvancedMachineFeatures <a name="ContainerNodePoolNodeConfigAdvancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigAdvancedMachineFeatures;

ContainerNodePoolNodeConfigAdvancedMachineFeatures.builder()
    .threadsPerCore(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | The number of threads per physical core. |

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#threads_per_core ContainerNodePool#threads_per_core}

---

### ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig <a name="ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig;

ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.builder()
    .localSsdCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | Number of local SSDs to use to back ephemeral storage. |

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

### ContainerNodePoolNodeConfigGcfsConfig <a name="ContainerNodePoolNodeConfigGcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGcfsConfig;

ContainerNodePoolNodeConfigGcfsConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not GCFS is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not GCFS is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigGuestAccelerator <a name="ContainerNodePoolNodeConfigGuestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGuestAccelerator;

ContainerNodePoolNodeConfigGuestAccelerator.builder()
//  .count(java.lang.Number)
//  .gpuPartitionSize(java.lang.String)
//  .gpuSharingConfig(IResolvable)
//  .gpuSharingConfig(java.util.List<ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#count ContainerNodePool#count}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize">gpuPartitionSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_partition_size ContainerNodePool#gpu_partition_size}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig">gpuSharingConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_config ContainerNodePool#gpu_sharing_config}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#type ContainerNodePool#type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#count ContainerNodePool#count}.

---

##### `gpuPartitionSize`<sup>Optional</sup> <a name="gpuPartitionSize" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize"></a>

```java
public java.lang.String getGpuPartitionSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_partition_size ContainerNodePool#gpu_partition_size}.

---

##### `gpuSharingConfig`<sup>Optional</sup> <a name="gpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig"></a>

```java
public java.lang.Object getGpuSharingConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_config ContainerNodePool#gpu_sharing_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#type ContainerNodePool#type}.

---

### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;

ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.builder()
//  .gpuSharingStrategy(java.lang.String)
//  .maxSharedClientsPerGpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy">gpuSharingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_strategy ContainerNodePool#gpu_sharing_strategy}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu">maxSharedClientsPerGpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_shared_clients_per_gpu ContainerNodePool#max_shared_clients_per_gpu}. |

---

##### `gpuSharingStrategy`<sup>Optional</sup> <a name="gpuSharingStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy"></a>

```java
public java.lang.String getGpuSharingStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#gpu_sharing_strategy ContainerNodePool#gpu_sharing_strategy}.

---

##### `maxSharedClientsPerGpu`<sup>Optional</sup> <a name="maxSharedClientsPerGpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu"></a>

```java
public java.lang.Number getMaxSharedClientsPerGpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_shared_clients_per_gpu ContainerNodePool#max_shared_clients_per_gpu}.

---

### ContainerNodePoolNodeConfigGvnic <a name="ContainerNodePoolNodeConfigGvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGvnic;

ContainerNodePoolNodeConfigGvnic.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not gvnic is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not gvnic is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigKubeletConfig <a name="ContainerNodePoolNodeConfigKubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigKubeletConfig;

ContainerNodePoolNodeConfigKubeletConfig.builder()
    .cpuManagerPolicy(java.lang.String)
//  .cpuCfsQuota(java.lang.Boolean)
//  .cpuCfsQuota(IResolvable)
//  .cpuCfsQuotaPeriod(java.lang.String)
//  .podPidsLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>java.lang.String</code> | Control the CPU management policy on the node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable CPU CFS quota enforcement for containers that specify CPU limits. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>java.lang.String</code> | Set the CPU CFS quota period value 'cpu.cfs_period_us'. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit">podPidsLimit</a></code> | <code>java.lang.Number</code> | Controls the maximum number of processes allowed to run in a pod. |

---

##### `cpuManagerPolicy`<sup>Required</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy"></a>

```java
public java.lang.String getCpuManagerPolicy();
```

- *Type:* java.lang.String

Control the CPU management policy on the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_manager_policy ContainerNodePool#cpu_manager_policy}

---

##### `cpuCfsQuota`<sup>Optional</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota"></a>

```java
public java.lang.Object getCpuCfsQuota();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable CPU CFS quota enforcement for containers that specify CPU limits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_cfs_quota ContainerNodePool#cpu_cfs_quota}

---

##### `cpuCfsQuotaPeriod`<sup>Optional</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```java
public java.lang.String getCpuCfsQuotaPeriod();
```

- *Type:* java.lang.String

Set the CPU CFS quota period value 'cpu.cfs_period_us'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#cpu_cfs_quota_period ContainerNodePool#cpu_cfs_quota_period}

---

##### `podPidsLimit`<sup>Optional</sup> <a name="podPidsLimit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit"></a>

```java
public java.lang.Number getPodPidsLimit();
```

- *Type:* java.lang.Number

Controls the maximum number of processes allowed to run in a pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#pod_pids_limit ContainerNodePool#pod_pids_limit}

---

### ContainerNodePoolNodeConfigLinuxNodeConfig <a name="ContainerNodePoolNodeConfigLinuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigLinuxNodeConfig;

ContainerNodePoolNodeConfigLinuxNodeConfig.builder()
    .sysctls(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls">sysctls</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. |

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctls();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#sysctls ContainerNodePool#sysctls}

---

### ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig <a name="ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig;

ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.builder()
    .localSsdCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | Number of raw-block local NVMe SSD disks to be attached to the node. |

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

Number of raw-block local NVMe SSD disks to be attached to the node.

Each local SSD is 375 GB in size.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

### ContainerNodePoolNodeConfigReservationAffinity <a name="ContainerNodePoolNodeConfigReservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigReservationAffinity;

ContainerNodePoolNodeConfigReservationAffinity.builder()
    .consumeReservationType(java.lang.String)
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType">consumeReservationType</a></code> | <code>java.lang.String</code> | Corresponds to the type of reservation consumption. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.key">key</a></code> | <code>java.lang.String</code> | The label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The label values of the reservation resource. |

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType"></a>

```java
public java.lang.String getConsumeReservationType();
```

- *Type:* java.lang.String

Corresponds to the type of reservation consumption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#consume_reservation_type ContainerNodePool#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key of a reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#key ContainerNodePool#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The label values of the reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#values ContainerNodePool#values}

---

### ContainerNodePoolNodeConfigShieldedInstanceConfig <a name="ContainerNodePoolNodeConfigShieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigShieldedInstanceConfig;

ContainerNodePoolNodeConfigShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_integrity_monitoring ContainerNodePool#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#enable_secure_boot ContainerNodePool#enable_secure_boot}

---

### ContainerNodePoolNodeConfigTaint <a name="ContainerNodePoolNodeConfigTaint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigTaint;

ContainerNodePoolNodeConfigTaint.builder()
//  .effect(java.lang.String)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#effect ContainerNodePool#effect}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#key ContainerNodePool#key}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#value ContainerNodePool#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#effect ContainerNodePool#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#key ContainerNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#value ContainerNodePool#value}.

---

### ContainerNodePoolNodeConfigWorkloadMetadataConfig <a name="ContainerNodePoolNodeConfigWorkloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigWorkloadMetadataConfig;

ContainerNodePoolNodeConfigWorkloadMetadataConfig.builder()
    .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Mode is the configuration for how to expose metadata to workloads running on the node. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Mode is the configuration for how to expose metadata to workloads running on the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#mode ContainerNodePool#mode}

---

### ContainerNodePoolPlacementPolicy <a name="ContainerNodePoolPlacementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolPlacementPolicy;

ContainerNodePoolPlacementPolicy.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Type defines the type of placement policy. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type defines the type of placement policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#type ContainerNodePool#type}

---

### ContainerNodePoolTimeouts <a name="ContainerNodePoolTimeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolTimeouts;

ContainerNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create ContainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#delete ContainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#update ContainerNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#create ContainerNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#delete ContainerNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#update ContainerNodePool#update}.

---

### ContainerNodePoolUpgradeSettings <a name="ContainerNodePoolUpgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolUpgradeSettings;

ContainerNodePoolUpgradeSettings.builder()
//  .blueGreenSettings(ContainerNodePoolUpgradeSettingsBlueGreenSettings)
//  .maxSurge(java.lang.Number)
//  .maxUnavailable(java.lang.Number)
//  .strategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.blueGreenSettings">blueGreenSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | blue_green_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxSurge">maxSurge</a></code> | <code>java.lang.Number</code> | The number of additional nodes that can be added to the node pool during an upgrade. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxUnavailable">maxUnavailable</a></code> | <code>java.lang.Number</code> | The number of nodes that can be simultaneously unavailable during an upgrade. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.strategy">strategy</a></code> | <code>java.lang.String</code> | Update strategy for the given nodepool. |

---

##### `blueGreenSettings`<sup>Optional</sup> <a name="blueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.blueGreenSettings"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettings getBlueGreenSettings();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

blue_green_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#blue_green_settings ContainerNodePool#blue_green_settings}

---

##### `maxSurge`<sup>Optional</sup> <a name="maxSurge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxSurge"></a>

```java
public java.lang.Number getMaxSurge();
```

- *Type:* java.lang.Number

The number of additional nodes that can be added to the node pool during an upgrade.

Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_surge ContainerNodePool#max_surge}

---

##### `maxUnavailable`<sup>Optional</sup> <a name="maxUnavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxUnavailable"></a>

```java
public java.lang.Number getMaxUnavailable();
```

- *Type:* java.lang.Number

The number of nodes that can be simultaneously unavailable during an upgrade.

Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#max_unavailable ContainerNodePool#max_unavailable}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

Update strategy for the given nodepool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#strategy ContainerNodePool#strategy}

---

### ContainerNodePoolUpgradeSettingsBlueGreenSettings <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolUpgradeSettingsBlueGreenSettings;

ContainerNodePoolUpgradeSettingsBlueGreenSettings.builder()
    .standardRolloutPolicy(ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy)
//  .nodePoolSoakDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy">standardRolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | standard_rollout_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration">nodePoolSoakDuration</a></code> | <code>java.lang.String</code> | Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. |

---

##### `standardRolloutPolicy`<sup>Required</sup> <a name="standardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy getStandardRolloutPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

standard_rollout_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#standard_rollout_policy ContainerNodePool#standard_rollout_policy}

---

##### `nodePoolSoakDuration`<sup>Optional</sup> <a name="nodePoolSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration"></a>

```java
public java.lang.String getNodePoolSoakDuration();
```

- *Type:* java.lang.String

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#node_pool_soak_duration ContainerNodePool#node_pool_soak_duration}

---

### ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;

ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.builder()
//  .batchNodeCount(java.lang.Number)
//  .batchPercentage(java.lang.Number)
//  .batchSoakDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount">batchNodeCount</a></code> | <code>java.lang.Number</code> | Number of blue nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage">batchPercentage</a></code> | <code>java.lang.Number</code> | Percentage of the blue pool nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration">batchSoakDuration</a></code> | <code>java.lang.String</code> | Soak time after each batch gets drained. |

---

##### `batchNodeCount`<sup>Optional</sup> <a name="batchNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount"></a>

```java
public java.lang.Number getBatchNodeCount();
```

- *Type:* java.lang.Number

Number of blue nodes to drain in a batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_node_count ContainerNodePool#batch_node_count}

---

##### `batchPercentage`<sup>Optional</sup> <a name="batchPercentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage"></a>

```java
public java.lang.Number getBatchPercentage();
```

- *Type:* java.lang.Number

Percentage of the blue pool nodes to drain in a batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_percentage ContainerNodePool#batch_percentage}

---

##### `batchSoakDuration`<sup>Optional</sup> <a name="batchSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration"></a>

```java
public java.lang.String getBatchSoakDuration();
```

- *Type:* java.lang.String

Soak time after each batch gets drained.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool#batch_soak_duration ContainerNodePool#batch_soak_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerNodePoolAutoscalingOutputReference <a name="ContainerNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolAutoscalingOutputReference;

new ContainerNodePoolAutoscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetLocationPolicy">resetLocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount">resetTotalMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount">resetTotalMinNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocationPolicy` <a name="resetLocationPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetLocationPolicy"></a>

```java
public void resetLocationPolicy()
```

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount"></a>

```java
public void resetMaxNodeCount()
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMinNodeCount"></a>

```java
public void resetMinNodeCount()
```

##### `resetTotalMaxNodeCount` <a name="resetTotalMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount"></a>

```java
public void resetTotalMaxNodeCount()
```

##### `resetTotalMinNodeCount` <a name="resetTotalMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount"></a>

```java
public void resetTotalMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput">locationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput">totalMaxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput">totalMinNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicy">locationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount">totalMaxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount">totalMinNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationPolicyInput`<sup>Optional</sup> <a name="locationPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput"></a>

```java
public java.lang.String getLocationPolicyInput();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `totalMaxNodeCountInput`<sup>Optional</sup> <a name="totalMaxNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput"></a>

```java
public java.lang.Number getTotalMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `totalMinNodeCountInput`<sup>Optional</sup> <a name="totalMinNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput"></a>

```java
public java.lang.Number getTotalMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `locationPolicy`<sup>Required</sup> <a name="locationPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicy"></a>

```java
public java.lang.String getLocationPolicy();
```

- *Type:* java.lang.String

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `totalMaxNodeCount`<sup>Required</sup> <a name="totalMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount"></a>

```java
public java.lang.Number getTotalMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `totalMinNodeCount`<sup>Required</sup> <a name="totalMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount"></a>

```java
public java.lang.Number getTotalMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolAutoscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---


### ContainerNodePoolManagementOutputReference <a name="ContainerNodePoolManagementOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolManagementOutputReference;

new ContainerNodePoolManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoRepair">resetAutoRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoUpgrade">resetAutoUpgrade</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRepair` <a name="resetAutoRepair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoRepair"></a>

```java
public void resetAutoRepair()
```

##### `resetAutoUpgrade` <a name="resetAutoUpgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoUpgrade"></a>

```java
public void resetAutoUpgrade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepairInput">autoRepairInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgradeInput">autoUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepair">autoRepair</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRepairInput`<sup>Optional</sup> <a name="autoRepairInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepairInput"></a>

```java
public java.lang.Object getAutoRepairInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoUpgradeInput`<sup>Optional</sup> <a name="autoUpgradeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgradeInput"></a>

```java
public java.lang.Object getAutoUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRepair`<sup>Required</sup> <a name="autoRepair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepair"></a>

```java
public java.lang.Object getAutoRepair();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoUpgrade`<sup>Required</sup> <a name="autoUpgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgrade"></a>

```java
public java.lang.Object getAutoUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolManagement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---


### ContainerNodePoolNetworkConfigOutputReference <a name="ContainerNodePoolNetworkConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNetworkConfigOutputReference;

new ContainerNodePoolNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange">resetCreatePodRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes">resetEnablePrivateNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock">resetPodIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodRange">resetPodRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreatePodRange` <a name="resetCreatePodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange"></a>

```java
public void resetCreatePodRange()
```

##### `resetEnablePrivateNodes` <a name="resetEnablePrivateNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes"></a>

```java
public void resetEnablePrivateNodes()
```

##### `resetPodIpv4CidrBlock` <a name="resetPodIpv4CidrBlock" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock"></a>

```java
public void resetPodIpv4CidrBlock()
```

##### `resetPodRange` <a name="resetPodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodRange"></a>

```java
public void resetPodRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput">createPodRangeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput">enablePrivateNodesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput">podIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRangeInput">podRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRange">createPodRange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes">enablePrivateNodes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock">podIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRange">podRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createPodRangeInput`<sup>Optional</sup> <a name="createPodRangeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput"></a>

```java
public java.lang.Object getCreatePodRangeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePrivateNodesInput`<sup>Optional</sup> <a name="enablePrivateNodesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput"></a>

```java
public java.lang.Object getEnablePrivateNodesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `podIpv4CidrBlockInput`<sup>Optional</sup> <a name="podIpv4CidrBlockInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput"></a>

```java
public java.lang.String getPodIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `podRangeInput`<sup>Optional</sup> <a name="podRangeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRangeInput"></a>

```java
public java.lang.String getPodRangeInput();
```

- *Type:* java.lang.String

---

##### `createPodRange`<sup>Required</sup> <a name="createPodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRange"></a>

```java
public java.lang.Object getCreatePodRange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePrivateNodes`<sup>Required</sup> <a name="enablePrivateNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes"></a>

```java
public java.lang.Object getEnablePrivateNodes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `podIpv4CidrBlock`<sup>Required</sup> <a name="podIpv4CidrBlock" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock"></a>

```java
public java.lang.String getPodIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `podRange`<sup>Required</sup> <a name="podRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRange"></a>

```java
public java.lang.String getPodRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---


### ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference <a name="ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference;

new ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---


### ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference <a name="ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference;

new ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---


### ContainerNodePoolNodeConfigGcfsConfigOutputReference <a name="ContainerNodePoolNodeConfigGcfsConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGcfsConfigOutputReference;

new ContainerNodePoolNodeConfigGcfsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigGcfsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList;

new ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get"></a>

```java
public ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>>

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference;

new ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy">resetGpuSharingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu">resetMaxSharedClientsPerGpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGpuSharingStrategy` <a name="resetGpuSharingStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy"></a>

```java
public void resetGpuSharingStrategy()
```

##### `resetMaxSharedClientsPerGpu` <a name="resetMaxSharedClientsPerGpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu"></a>

```java
public void resetMaxSharedClientsPerGpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput">gpuSharingStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput">maxSharedClientsPerGpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy">gpuSharingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu">maxSharedClientsPerGpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gpuSharingStrategyInput`<sup>Optional</sup> <a name="gpuSharingStrategyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput"></a>

```java
public java.lang.String getGpuSharingStrategyInput();
```

- *Type:* java.lang.String

---

##### `maxSharedClientsPerGpuInput`<sup>Optional</sup> <a name="maxSharedClientsPerGpuInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput"></a>

```java
public java.lang.Number getMaxSharedClientsPerGpuInput();
```

- *Type:* java.lang.Number

---

##### `gpuSharingStrategy`<sup>Required</sup> <a name="gpuSharingStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy"></a>

```java
public java.lang.String getGpuSharingStrategy();
```

- *Type:* java.lang.String

---

##### `maxSharedClientsPerGpu`<sup>Required</sup> <a name="maxSharedClientsPerGpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu"></a>

```java
public java.lang.Number getMaxSharedClientsPerGpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerNodePoolNodeConfigGuestAcceleratorList <a name="ContainerNodePoolNodeConfigGuestAcceleratorList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGuestAcceleratorList;

new ContainerNodePoolNodeConfigGuestAcceleratorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get"></a>

```java
public ContainerNodePoolNodeConfigGuestAcceleratorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>>

---


### ContainerNodePoolNodeConfigGuestAcceleratorOutputReference <a name="ContainerNodePoolNodeConfigGuestAcceleratorOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference;

new ContainerNodePoolNodeConfigGuestAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig">putGpuSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize">resetGpuPartitionSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig">resetGpuSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGpuSharingConfig` <a name="putGpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig"></a>

```java
public void putGpuSharingConfig(IResolvable OR java.util.List<ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>>

---

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetGpuPartitionSize` <a name="resetGpuPartitionSize" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize"></a>

```java
public void resetGpuPartitionSize()
```

##### `resetGpuSharingConfig` <a name="resetGpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig"></a>

```java
public void resetGpuSharingConfig()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig">gpuSharingConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput">gpuPartitionSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput">gpuSharingConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize">gpuPartitionSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gpuSharingConfig`<sup>Required</sup> <a name="gpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig"></a>

```java
public ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList getGpuSharingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `gpuPartitionSizeInput`<sup>Optional</sup> <a name="gpuPartitionSizeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput"></a>

```java
public java.lang.String getGpuPartitionSizeInput();
```

- *Type:* java.lang.String

---

##### `gpuSharingConfigInput`<sup>Optional</sup> <a name="gpuSharingConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput"></a>

```java
public java.lang.Object getGpuSharingConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `gpuPartitionSize`<sup>Required</sup> <a name="gpuPartitionSize" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize"></a>

```java
public java.lang.String getGpuPartitionSize();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerNodePoolNodeConfigGvnicOutputReference <a name="ContainerNodePoolNodeConfigGvnicOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigGvnicOutputReference;

new ContainerNodePoolNodeConfigGvnicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigGvnic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---


### ContainerNodePoolNodeConfigKubeletConfigOutputReference <a name="ContainerNodePoolNodeConfigKubeletConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigKubeletConfigOutputReference;

new ContainerNodePoolNodeConfigKubeletConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota">resetCpuCfsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">resetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit">resetPodPidsLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCfsQuota` <a name="resetCpuCfsQuota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```java
public void resetCpuCfsQuota()
```

##### `resetCpuCfsQuotaPeriod` <a name="resetCpuCfsQuotaPeriod" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```java
public void resetCpuCfsQuotaPeriod()
```

##### `resetPodPidsLimit` <a name="resetPodPidsLimit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit"></a>

```java
public void resetPodPidsLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput">cpuCfsQuotaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpuCfsQuotaPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpuManagerPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput">podPidsLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit">podPidsLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCfsQuotaInput`<sup>Optional</sup> <a name="cpuCfsQuotaInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```java
public java.lang.Object getCpuCfsQuotaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="cpuCfsQuotaPeriodInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```java
public java.lang.String getCpuCfsQuotaPeriodInput();
```

- *Type:* java.lang.String

---

##### `cpuManagerPolicyInput`<sup>Optional</sup> <a name="cpuManagerPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```java
public java.lang.String getCpuManagerPolicyInput();
```

- *Type:* java.lang.String

---

##### `podPidsLimitInput`<sup>Optional</sup> <a name="podPidsLimitInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```java
public java.lang.Number getPodPidsLimitInput();
```

- *Type:* java.lang.Number

---

##### `cpuCfsQuota`<sup>Required</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```java
public java.lang.Object getCpuCfsQuota();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuCfsQuotaPeriod`<sup>Required</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```java
public java.lang.String getCpuCfsQuotaPeriod();
```

- *Type:* java.lang.String

---

##### `cpuManagerPolicy`<sup>Required</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```java
public java.lang.String getCpuManagerPolicy();
```

- *Type:* java.lang.String

---

##### `podPidsLimit`<sup>Required</sup> <a name="podPidsLimit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit"></a>

```java
public java.lang.Number getPodPidsLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigKubeletConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---


### ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference <a name="ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference;

new ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput">sysctlsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls">sysctls</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sysctlsInput`<sup>Optional</sup> <a name="sysctlsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctlsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctls();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigLinuxNodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---


### ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference <a name="ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference;

new ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---


### ContainerNodePoolNodeConfigOutputReference <a name="ContainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigOutputReference;

new ContainerNodePoolNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig">putEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig">putGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic">putGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig">putKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig">putLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig">putLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig">putWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey">resetBootDiskKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig">resetEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGcfsConfig">resetGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGvnic">resetGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetKubeletConfig">resetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig">resetLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig">resetLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLoggingVariant">resetLoggingVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetNodeGroup">resetNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetResourceLabels">resetResourceLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSpot">resetSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTaint">resetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig">resetWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures"></a>

```java
public void putAdvancedMachineFeatures(ContainerNodePoolNodeConfigAdvancedMachineFeatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `putEphemeralStorageLocalSsdConfig` <a name="putEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig"></a>

```java
public void putEphemeralStorageLocalSsdConfig(ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---

##### `putGcfsConfig` <a name="putGcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig"></a>

```java
public void putGcfsConfig(ContainerNodePoolNodeConfigGcfsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator"></a>

```java
public void putGuestAccelerator(IResolvable OR java.util.List<ContainerNodePoolNodeConfigGuestAccelerator> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>>

---

##### `putGvnic` <a name="putGvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic"></a>

```java
public void putGvnic(ContainerNodePoolNodeConfigGvnic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---

##### `putKubeletConfig` <a name="putKubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig"></a>

```java
public void putKubeletConfig(ContainerNodePoolNodeConfigKubeletConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `putLinuxNodeConfig` <a name="putLinuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig"></a>

```java
public void putLinuxNodeConfig(ContainerNodePoolNodeConfigLinuxNodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `putLocalNvmeSsdBlockConfig` <a name="putLocalNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig"></a>

```java
public void putLocalNvmeSsdBlockConfig(ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity"></a>

```java
public void putReservationAffinity(ContainerNodePoolNodeConfigReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(ContainerNodePoolNodeConfigShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `putTaint` <a name="putTaint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint"></a>

```java
public void putTaint(IResolvable OR java.util.List<ContainerNodePoolNodeConfigTaint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>>

---

##### `putWorkloadMetadataConfig` <a name="putWorkloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig"></a>

```java
public void putWorkloadMetadataConfig(ContainerNodePoolNodeConfigWorkloadMetadataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures"></a>

```java
public void resetAdvancedMachineFeatures()
```

##### `resetBootDiskKmsKey` <a name="resetBootDiskKmsKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey"></a>

```java
public void resetBootDiskKmsKey()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetEphemeralStorageLocalSsdConfig` <a name="resetEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig"></a>

```java
public void resetEphemeralStorageLocalSsdConfig()
```

##### `resetGcfsConfig` <a name="resetGcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGcfsConfig"></a>

```java
public void resetGcfsConfig()
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator"></a>

```java
public void resetGuestAccelerator()
```

##### `resetGvnic` <a name="resetGvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGvnic"></a>

```java
public void resetGvnic()
```

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetImageType"></a>

```java
public void resetImageType()
```

##### `resetKubeletConfig` <a name="resetKubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetKubeletConfig"></a>

```java
public void resetKubeletConfig()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLinuxNodeConfig` <a name="resetLinuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig"></a>

```java
public void resetLinuxNodeConfig()
```

##### `resetLocalNvmeSsdBlockConfig` <a name="resetLocalNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig"></a>

```java
public void resetLocalNvmeSsdBlockConfig()
```

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount"></a>

```java
public void resetLocalSsdCount()
```

##### `resetLoggingVariant` <a name="resetLoggingVariant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLoggingVariant"></a>

```java
public void resetLoggingVariant()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```

##### `resetNodeGroup` <a name="resetNodeGroup" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetNodeGroup"></a>

```java
public void resetNodeGroup()
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetPreemptible"></a>

```java
public void resetPreemptible()
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```

##### `resetResourceLabels` <a name="resetResourceLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetResourceLabels"></a>

```java
public void resetResourceLabels()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetSpot` <a name="resetSpot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSpot"></a>

```java
public void resetSpot()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTaint"></a>

```java
public void resetTaint()
```

##### `resetWorkloadMetadataConfig` <a name="resetWorkloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig"></a>

```java
public void resetWorkloadMetadataConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig">ephemeralStorageLocalSsdConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfig">gcfsConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference">ContainerNodePoolNodeConfigGcfsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList">ContainerNodePoolNodeConfigGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference">ContainerNodePoolNodeConfigGvnicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference">ContainerNodePoolNodeConfigKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig">linuxNodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig">localNvmeSsdBlockConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference">ContainerNodePoolNodeConfigReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList">ContainerNodePoolNodeConfigTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig">workloadMetadataConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput">bootDiskKmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput">ephemeralStorageLocalSsdConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput">gcfsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnicInput">gvnicInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput">kubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput">linuxNodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput">localNvmeSsdBlockConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput">loggingVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput">nodeGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput">resourceLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spotInput">spotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taintInput">taintInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput">workloadMetadataConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey">bootDiskKmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariant">loggingVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroup">nodeGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabels">resourceLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spot">spot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures"></a>

```java
public ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a>

---

##### `ephemeralStorageLocalSsdConfig`<sup>Required</sup> <a name="ephemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig"></a>

```java
public ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference getEphemeralStorageLocalSsdConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a>

---

##### `gcfsConfig`<sup>Required</sup> <a name="gcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfig"></a>

```java
public ContainerNodePoolNodeConfigGcfsConfigOutputReference getGcfsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference">ContainerNodePoolNodeConfigGcfsConfigOutputReference</a>

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAccelerator"></a>

```java
public ContainerNodePoolNodeConfigGuestAcceleratorList getGuestAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList">ContainerNodePoolNodeConfigGuestAcceleratorList</a>

---

##### `gvnic`<sup>Required</sup> <a name="gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnic"></a>

```java
public ContainerNodePoolNodeConfigGvnicOutputReference getGvnic();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference">ContainerNodePoolNodeConfigGvnicOutputReference</a>

---

##### `kubeletConfig`<sup>Required</sup> <a name="kubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfig"></a>

```java
public ContainerNodePoolNodeConfigKubeletConfigOutputReference getKubeletConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference">ContainerNodePoolNodeConfigKubeletConfigOutputReference</a>

---

##### `linuxNodeConfig`<sup>Required</sup> <a name="linuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig"></a>

```java
public ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference getLinuxNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a>

---

##### `localNvmeSsdBlockConfig`<sup>Required</sup> <a name="localNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig"></a>

```java
public ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference getLocalNvmeSsdBlockConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinity"></a>

```java
public ContainerNodePoolNodeConfigReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference">ContainerNodePoolNodeConfigReservationAffinityOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig"></a>

```java
public ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taint"></a>

```java
public ContainerNodePoolNodeConfigTaintList getTaint();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList">ContainerNodePoolNodeConfigTaintList</a>

---

##### `workloadMetadataConfig`<sup>Required</sup> <a name="workloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig"></a>

```java
public ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference getWorkloadMetadataConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput"></a>

```java
public ContainerNodePoolNodeConfigAdvancedMachineFeatures getAdvancedMachineFeaturesInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `bootDiskKmsKeyInput`<sup>Optional</sup> <a name="bootDiskKmsKeyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput"></a>

```java
public java.lang.String getBootDiskKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `ephemeralStorageLocalSsdConfigInput`<sup>Optional</sup> <a name="ephemeralStorageLocalSsdConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput"></a>

```java
public ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig getEphemeralStorageLocalSsdConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---

##### `gcfsConfigInput`<sup>Optional</sup> <a name="gcfsConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput"></a>

```java
public ContainerNodePoolNodeConfigGcfsConfig getGcfsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput"></a>

```java
public java.lang.Object getGuestAcceleratorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>>

---

##### `gvnicInput`<sup>Optional</sup> <a name="gvnicInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnicInput"></a>

```java
public ContainerNodePoolNodeConfigGvnic getGvnicInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageTypeInput"></a>

```java
public java.lang.String getImageTypeInput();
```

- *Type:* java.lang.String

---

##### `kubeletConfigInput`<sup>Optional</sup> <a name="kubeletConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput"></a>

```java
public ContainerNodePoolNodeConfigKubeletConfig getKubeletConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `linuxNodeConfigInput`<sup>Optional</sup> <a name="linuxNodeConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput"></a>

```java
public ContainerNodePoolNodeConfigLinuxNodeConfig getLinuxNodeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `localNvmeSsdBlockConfigInput`<sup>Optional</sup> <a name="localNvmeSsdBlockConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput"></a>

```java
public ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig getLocalNvmeSsdBlockConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `loggingVariantInput`<sup>Optional</sup> <a name="loggingVariantInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput"></a>

```java
public java.lang.String getLoggingVariantInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `nodeGroupInput`<sup>Optional</sup> <a name="nodeGroupInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput"></a>

```java
public java.lang.String getNodeGroupInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptibleInput"></a>

```java
public java.lang.Object getPreemptibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput"></a>

```java
public ContainerNodePoolNodeConfigReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `resourceLabelsInput`<sup>Optional</sup> <a name="resourceLabelsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```java
public ContainerNodePoolNodeConfigShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `spotInput`<sup>Optional</sup> <a name="spotInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spotInput"></a>

```java
public java.lang.Object getSpotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taintInput"></a>

```java
public java.lang.Object getTaintInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>>

---

##### `workloadMetadataConfigInput`<sup>Optional</sup> <a name="workloadMetadataConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput"></a>

```java
public ContainerNodePoolNodeConfigWorkloadMetadataConfig getWorkloadMetadataConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `bootDiskKmsKey`<sup>Required</sup> <a name="bootDiskKmsKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey"></a>

```java
public java.lang.String getBootDiskKmsKey();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `loggingVariant`<sup>Required</sup> <a name="loggingVariant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariant"></a>

```java
public java.lang.String getLoggingVariant();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `nodeGroup`<sup>Required</sup> <a name="nodeGroup" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroup"></a>

```java
public java.lang.String getNodeGroup();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceLabels`<sup>Required</sup> <a name="resourceLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `spot`<sup>Required</sup> <a name="spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spot"></a>

```java
public java.lang.Object getSpot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---


### ContainerNodePoolNodeConfigReservationAffinityOutputReference <a name="ContainerNodePoolNodeConfigReservationAffinityOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigReservationAffinityOutputReference;

new ContainerNodePoolNodeConfigReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput">consumeReservationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType">consumeReservationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumeReservationTypeInput`<sup>Optional</sup> <a name="consumeReservationTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```java
public java.lang.String getConsumeReservationTypeInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType"></a>

```java
public java.lang.String getConsumeReservationType();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---


### ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference <a name="ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference;

new ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---


### ContainerNodePoolNodeConfigTaintList <a name="ContainerNodePoolNodeConfigTaintList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigTaintList;

new ContainerNodePoolNodeConfigTaintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get"></a>

```java
public ContainerNodePoolNodeConfigTaintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>>

---


### ContainerNodePoolNodeConfigTaintOutputReference <a name="ContainerNodePoolNodeConfigTaintOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigTaintOutputReference;

new ContainerNodePoolNodeConfigTaintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference <a name="ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference;

new ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolNodeConfigWorkloadMetadataConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---


### ContainerNodePoolPlacementPolicyOutputReference <a name="ContainerNodePoolPlacementPolicyOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolPlacementPolicyOutputReference;

new ContainerNodePoolPlacementPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolPlacementPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---


### ContainerNodePoolTimeoutsOutputReference <a name="ContainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolTimeoutsOutputReference;

new ContainerNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference;

new ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy">putStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration">resetNodePoolSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardRolloutPolicy` <a name="putStandardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy"></a>

```java
public void putStandardRolloutPolicy(ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `resetNodePoolSoakDuration` <a name="resetNodePoolSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration"></a>

```java
public void resetNodePoolSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy">standardRolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput">nodePoolSoakDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput">standardRolloutPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration">nodePoolSoakDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `standardRolloutPolicy`<sup>Required</sup> <a name="standardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference getStandardRolloutPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a>

---

##### `nodePoolSoakDurationInput`<sup>Optional</sup> <a name="nodePoolSoakDurationInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput"></a>

```java
public java.lang.String getNodePoolSoakDurationInput();
```

- *Type:* java.lang.String

---

##### `standardRolloutPolicyInput`<sup>Optional</sup> <a name="standardRolloutPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy getStandardRolloutPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `nodePoolSoakDuration`<sup>Required</sup> <a name="nodePoolSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration"></a>

```java
public java.lang.String getNodePoolSoakDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---


### ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference;

new ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount">resetBatchNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage">resetBatchPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration">resetBatchSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchNodeCount` <a name="resetBatchNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount"></a>

```java
public void resetBatchNodeCount()
```

##### `resetBatchPercentage` <a name="resetBatchPercentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage"></a>

```java
public void resetBatchPercentage()
```

##### `resetBatchSoakDuration` <a name="resetBatchSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration"></a>

```java
public void resetBatchSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput">batchNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput">batchPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput">batchSoakDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount">batchNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage">batchPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration">batchSoakDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchNodeCountInput`<sup>Optional</sup> <a name="batchNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput"></a>

```java
public java.lang.Number getBatchNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `batchPercentageInput`<sup>Optional</sup> <a name="batchPercentageInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```java
public java.lang.Number getBatchPercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchSoakDurationInput`<sup>Optional</sup> <a name="batchSoakDurationInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput"></a>

```java
public java.lang.String getBatchSoakDurationInput();
```

- *Type:* java.lang.String

---

##### `batchNodeCount`<sup>Required</sup> <a name="batchNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount"></a>

```java
public java.lang.Number getBatchNodeCount();
```

- *Type:* java.lang.Number

---

##### `batchPercentage`<sup>Required</sup> <a name="batchPercentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage"></a>

```java
public java.lang.Number getBatchPercentage();
```

- *Type:* java.lang.Number

---

##### `batchSoakDuration`<sup>Required</sup> <a name="batchSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration"></a>

```java
public java.lang.String getBatchSoakDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---


### ContainerNodePoolUpgradeSettingsOutputReference <a name="ContainerNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_node_pool.ContainerNodePoolUpgradeSettingsOutputReference;

new ContainerNodePoolUpgradeSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings">putBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings">resetBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge">resetMaxSurge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable">resetMaxUnavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlueGreenSettings` <a name="putBlueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings"></a>

```java
public void putBlueGreenSettings(ContainerNodePoolUpgradeSettingsBlueGreenSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `resetBlueGreenSettings` <a name="resetBlueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings"></a>

```java
public void resetBlueGreenSettings()
```

##### `resetMaxSurge` <a name="resetMaxSurge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge"></a>

```java
public void resetMaxSurge()
```

##### `resetMaxUnavailable` <a name="resetMaxUnavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable"></a>

```java
public void resetMaxUnavailable()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetStrategy"></a>

```java
public void resetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings">blueGreenSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput">blueGreenSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">maxSurgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput">maxUnavailableInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable">maxUnavailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blueGreenSettings`<sup>Required</sup> <a name="blueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference getBlueGreenSettings();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a>

---

##### `blueGreenSettingsInput`<sup>Optional</sup> <a name="blueGreenSettingsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput"></a>

```java
public ContainerNodePoolUpgradeSettingsBlueGreenSettings getBlueGreenSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `maxSurgeInput`<sup>Optional</sup> <a name="maxSurgeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```java
public java.lang.Number getMaxSurgeInput();
```

- *Type:* java.lang.Number

---

##### `maxUnavailableInput`<sup>Optional</sup> <a name="maxUnavailableInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput"></a>

```java
public java.lang.Number getMaxUnavailableInput();
```

- *Type:* java.lang.Number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```java
public java.lang.Number getMaxSurge();
```

- *Type:* java.lang.Number

---

##### `maxUnavailable`<sup>Required</sup> <a name="maxUnavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable"></a>

```java
public java.lang.Number getMaxUnavailable();
```

- *Type:* java.lang.Number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```java
public ContainerNodePoolUpgradeSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---



