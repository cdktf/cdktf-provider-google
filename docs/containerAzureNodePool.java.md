# `containerAzureNodePool` Submodule <a name="`containerAzureNodePool` Submodule" id="@cdktf/provider-google.containerAzureNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAzureNodePool <a name="ContainerAzureNodePool" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool google_container_azure_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePool;

ContainerAzureNodePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .autoscaling(ContainerAzureNodePoolAutoscaling)
    .cluster(java.lang.String)
    .config(ContainerAzureNodePoolConfigA)
    .location(java.lang.String)
    .maxPodsConstraint(ContainerAzureNodePoolMaxPodsConstraint)
    .name(java.lang.String)
    .subnetId(java.lang.String)
    .version(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureAvailabilityZone(java.lang.String)
//  .id(java.lang.String)
//  .management(ContainerAzureNodePoolManagement)
//  .project(java.lang.String)
//  .timeouts(ContainerAzureNodePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#id ContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.autoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#autoscaling ContainerAzureNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#cluster ContainerAzureNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#config ContainerAzureNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#location ContainerAzureNodePool#location}

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.maxPodsConstraint"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#max_pods_constraint ContainerAzureNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#name ContainerAzureNodePool#name}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#subnet_id ContainerAzureNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#version ContainerAzureNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#annotations ContainerAzureNodePool#annotations}

---

##### `azureAvailabilityZone`<sup>Optional</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.azureAvailabilityZone"></a>

- *Type:* java.lang.String

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#azure_availability_zone ContainerAzureNodePool#azure_availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#id ContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.management"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#management ContainerAzureNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#project ContainerAzureNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#timeouts ContainerAzureNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putMaxPodsConstraint">putMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAzureAvailabilityZone">resetAzureAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putAutoscaling"></a>

```java
public void putAutoscaling(ContainerAzureNodePoolAutoscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putConfig"></a>

```java
public void putConfig(ContainerAzureNodePoolConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putManagement"></a>

```java
public void putManagement(ContainerAzureNodePoolManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a>

---

##### `putMaxPodsConstraint` <a name="putMaxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putMaxPodsConstraint"></a>

```java
public void putMaxPodsConstraint(ContainerAzureNodePoolMaxPodsConstraint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putTimeouts"></a>

```java
public void putTimeouts(ContainerAzureNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAzureAvailabilityZone` <a name="resetAzureAvailabilityZone" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAzureAvailabilityZone"></a>

```java
public void resetAzureAvailabilityZone()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetManagement"></a>

```java
public void resetManagement()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAzureNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePool;

ContainerAzureNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePool;

ContainerAzureNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePool;

ContainerAzureNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePool;

ContainerAzureNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerAzureNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerAzureNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerAzureNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerAzureNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAzureNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference">ContainerAzureNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference">ContainerAzureNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference">ContainerAzureNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference">ContainerAzureNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference">ContainerAzureNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZoneInput">azureAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.managementInput">managementInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraintInput">maxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscaling"></a>

```java
public ContainerAzureNodePoolAutoscalingOutputReference getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference">ContainerAzureNodePoolAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.config"></a>

```java
public ContainerAzureNodePoolConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference">ContainerAzureNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.management"></a>

```java
public ContainerAzureNodePoolManagementOutputReference getManagement();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference">ContainerAzureNodePoolManagementOutputReference</a>

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraint"></a>

```java
public ContainerAzureNodePoolMaxPodsConstraintOutputReference getMaxPodsConstraint();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference">ContainerAzureNodePoolMaxPodsConstraintOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeouts"></a>

```java
public ContainerAzureNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference">ContainerAzureNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscalingInput"></a>

```java
public ContainerAzureNodePoolAutoscaling getAutoscalingInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

---

##### `azureAvailabilityZoneInput`<sup>Optional</sup> <a name="azureAvailabilityZoneInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZoneInput"></a>

```java
public java.lang.String getAzureAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.configInput"></a>

```java
public ContainerAzureNodePoolConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.managementInput"></a>

```java
public ContainerAzureNodePoolManagement getManagementInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a>

---

##### `maxPodsConstraintInput`<sup>Optional</sup> <a name="maxPodsConstraintInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraintInput"></a>

```java
public ContainerAzureNodePoolMaxPodsConstraint getMaxPodsConstraintInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `azureAvailabilityZone`<sup>Required</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAzureNodePoolAutoscaling <a name="ContainerAzureNodePoolAutoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolAutoscaling;

ContainerAzureNodePoolAutoscaling.builder()
    .maxNodeCount(java.lang.Number)
    .minNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | Maximum number of nodes in the node pool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

Maximum number of nodes in the node pool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#max_node_count ContainerAzureNodePool#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#min_node_count ContainerAzureNodePool#min_node_count}

---

### ContainerAzureNodePoolConfig <a name="ContainerAzureNodePoolConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfig;

ContainerAzureNodePoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .autoscaling(ContainerAzureNodePoolAutoscaling)
    .cluster(java.lang.String)
    .config(ContainerAzureNodePoolConfigA)
    .location(java.lang.String)
    .maxPodsConstraint(ContainerAzureNodePoolMaxPodsConstraint)
    .name(java.lang.String)
    .subnetId(java.lang.String)
    .version(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureAvailabilityZone(java.lang.String)
//  .id(java.lang.String)
//  .management(ContainerAzureNodePoolManagement)
//  .project(java.lang.String)
//  .timeouts(ContainerAzureNodePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#id ContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.autoscaling"></a>

```java
public ContainerAzureNodePoolAutoscaling getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#autoscaling ContainerAzureNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#cluster ContainerAzureNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.config"></a>

```java
public ContainerAzureNodePoolConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#config ContainerAzureNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#location ContainerAzureNodePool#location}

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.maxPodsConstraint"></a>

```java
public ContainerAzureNodePoolMaxPodsConstraint getMaxPodsConstraint();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#max_pods_constraint ContainerAzureNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#name ContainerAzureNodePool#name}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#subnet_id ContainerAzureNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#version ContainerAzureNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#annotations ContainerAzureNodePool#annotations}

---

##### `azureAvailabilityZone`<sup>Optional</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#azure_availability_zone ContainerAzureNodePool#azure_availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#id ContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.management"></a>

```java
public ContainerAzureNodePoolManagement getManagement();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#management ContainerAzureNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#project ContainerAzureNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.timeouts"></a>

```java
public ContainerAzureNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#timeouts ContainerAzureNodePool#timeouts}

---

### ContainerAzureNodePoolConfigA <a name="ContainerAzureNodePoolConfigA" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigA;

ContainerAzureNodePoolConfigA.builder()
    .sshConfig(ContainerAzureNodePoolConfigSshConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .proxyConfig(ContainerAzureNodePoolConfigProxyConfig)
//  .rootVolume(ContainerAzureNodePoolConfigRootVolume)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vmSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`. |

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.sshConfig"></a>

```java
public ContainerAzureNodePoolConfigSshConfig getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#ssh_config ContainerAzureNodePool#ssh_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#labels ContainerAzureNodePool#labels}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.proxyConfig"></a>

```java
public ContainerAzureNodePoolConfigProxyConfig getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#proxy_config ContainerAzureNodePool#proxy_config}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.rootVolume"></a>

```java
public ContainerAzureNodePoolConfigRootVolume getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#root_volume ContainerAzureNodePool#root_volume}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#tags ContainerAzureNodePool#tags}

---

##### `vmSize`<sup>Optional</sup> <a name="vmSize" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#vm_size ContainerAzureNodePool#vm_size}

---

### ContainerAzureNodePoolConfigProxyConfig <a name="ContainerAzureNodePoolConfigProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigProxyConfig;

ContainerAzureNodePoolConfigProxyConfig.builder()
    .resourceGroupId(java.lang.String)
    .secretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#resource_group_id ContainerAzureNodePool#resource_group_id}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#secret_id ContainerAzureNodePool#secret_id}

---

### ContainerAzureNodePoolConfigRootVolume <a name="ContainerAzureNodePoolConfigRootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigRootVolume;

ContainerAzureNodePoolConfigRootVolume.builder()
//  .sizeGib(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#size_gib ContainerAzureNodePool#size_gib}

---

### ContainerAzureNodePoolConfigSshConfig <a name="ContainerAzureNodePoolConfigSshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigSshConfig;

ContainerAzureNodePoolConfigSshConfig.builder()
    .authorizedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#authorized_key ContainerAzureNodePool#authorized_key}

---

### ContainerAzureNodePoolManagement <a name="ContainerAzureNodePoolManagement" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolManagement;

ContainerAzureNodePoolManagement.builder()
//  .autoRepair(java.lang.Boolean)
//  .autoRepair(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement.property.autoRepair">autoRepair</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `autoRepair`<sup>Optional</sup> <a name="autoRepair" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement.property.autoRepair"></a>

```java
public java.lang.Object getAutoRepair();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#auto_repair ContainerAzureNodePool#auto_repair}

---

### ContainerAzureNodePoolMaxPodsConstraint <a name="ContainerAzureNodePoolMaxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolMaxPodsConstraint;

ContainerAzureNodePoolMaxPodsConstraint.builder()
    .maxPodsPerNode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | The maximum number of pods to schedule on a single node. |

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#max_pods_per_node ContainerAzureNodePool#max_pods_per_node}

---

### ContainerAzureNodePoolTimeouts <a name="ContainerAzureNodePoolTimeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolTimeouts;

ContainerAzureNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#create ContainerAzureNodePool#create}. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#delete ContainerAzureNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#update ContainerAzureNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#create ContainerAzureNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#delete ContainerAzureNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/container_azure_node_pool#update ContainerAzureNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAzureNodePoolAutoscalingOutputReference <a name="ContainerAzureNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolAutoscalingOutputReference;

new ContainerAzureNodePoolAutoscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.internalValue"></a>

```java
public ContainerAzureNodePoolAutoscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

---


### ContainerAzureNodePoolConfigAOutputReference <a name="ContainerAzureNodePoolConfigAOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigAOutputReference;

new ContainerAzureNodePoolConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetVmSize">resetVmSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putProxyConfig"></a>

```java
public void putProxyConfig(ContainerAzureNodePoolConfigProxyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putRootVolume"></a>

```java
public void putRootVolume(ContainerAzureNodePoolConfigRootVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putSshConfig"></a>

```java
public void putSshConfig(ContainerAzureNodePoolConfigSshConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetProxyConfig"></a>

```java
public void resetProxyConfig()
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetRootVolume"></a>

```java
public void resetRootVolume()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVmSize` <a name="resetVmSize" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetVmSize"></a>

```java
public void resetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference">ContainerAzureNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference">ContainerAzureNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference">ContainerAzureNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfig"></a>

```java
public ContainerAzureNodePoolConfigProxyConfigOutputReference getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference">ContainerAzureNodePoolConfigProxyConfigOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolume"></a>

```java
public ContainerAzureNodePoolConfigRootVolumeOutputReference getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference">ContainerAzureNodePoolConfigRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfig"></a>

```java
public ContainerAzureNodePoolConfigSshConfigOutputReference getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference">ContainerAzureNodePoolConfigSshConfigOutputReference</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```java
public ContainerAzureNodePoolConfigProxyConfig getProxyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```java
public ContainerAzureNodePoolConfigRootVolume getRootVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```java
public ContainerAzureNodePoolConfigSshConfig getSshConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.internalValue"></a>

```java
public ContainerAzureNodePoolConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

---


### ContainerAzureNodePoolConfigProxyConfigOutputReference <a name="ContainerAzureNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigProxyConfigOutputReference;

new ContainerAzureNodePoolConfigProxyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```java
public ContainerAzureNodePoolConfigProxyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

---


### ContainerAzureNodePoolConfigRootVolumeOutputReference <a name="ContainerAzureNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigRootVolumeOutputReference;

new ContainerAzureNodePoolConfigRootVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```java
public void resetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```java
public java.lang.Number getSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```java
public ContainerAzureNodePoolConfigRootVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

---


### ContainerAzureNodePoolConfigSshConfigOutputReference <a name="ContainerAzureNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolConfigSshConfigOutputReference;

new ContainerAzureNodePoolConfigSshConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput">authorizedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedKeyInput`<sup>Optional</sup> <a name="authorizedKeyInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput"></a>

```java
public java.lang.String getAuthorizedKeyInput();
```

- *Type:* java.lang.String

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```java
public ContainerAzureNodePoolConfigSshConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

---


### ContainerAzureNodePoolManagementOutputReference <a name="ContainerAzureNodePoolManagementOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolManagementOutputReference;

new ContainerAzureNodePoolManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.resetAutoRepair">resetAutoRepair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRepair` <a name="resetAutoRepair" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.resetAutoRepair"></a>

```java
public void resetAutoRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.autoRepairInput">autoRepairInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.autoRepair">autoRepair</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRepairInput`<sup>Optional</sup> <a name="autoRepairInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.autoRepairInput"></a>

```java
public java.lang.Object getAutoRepairInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRepair`<sup>Required</sup> <a name="autoRepair" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.autoRepair"></a>

```java
public java.lang.Object getAutoRepair();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagementOutputReference.property.internalValue"></a>

```java
public ContainerAzureNodePoolManagement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolManagement">ContainerAzureNodePoolManagement</a>

---


### ContainerAzureNodePoolMaxPodsConstraintOutputReference <a name="ContainerAzureNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolMaxPodsConstraintOutputReference;

new ContainerAzureNodePoolMaxPodsConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```java
public java.lang.Number getMaxPodsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```java
public ContainerAzureNodePoolMaxPodsConstraint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

---


### ContainerAzureNodePoolTimeoutsOutputReference <a name="ContainerAzureNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_node_pool.ContainerAzureNodePoolTimeoutsOutputReference;

new ContainerAzureNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a>

---



