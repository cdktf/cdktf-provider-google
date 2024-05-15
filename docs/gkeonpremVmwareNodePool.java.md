# `gkeonpremVmwareNodePool` Submodule <a name="`gkeonpremVmwareNodePool` Submodule" id="@cdktf/provider-google.gkeonpremVmwareNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareNodePool <a name="GkeonpremVmwareNodePool" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePool;

GkeonpremVmwareNodePool.Builder.create(Construct scope, java.lang.String id)
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
    .config(GkeonpremVmwareNodePoolConfigA)
    .location(java.lang.String)
    .name(java.lang.String)
    .vmwareCluster(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .nodePoolAutoscaling(GkeonpremVmwareNodePoolNodePoolAutoscaling)
//  .project(java.lang.String)
//  .timeouts(GkeonpremVmwareNodePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.vmwareCluster">vmwareCluster</a></code> | <code>java.lang.String</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.nodePoolAutoscaling">nodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#config GkeonpremVmwareNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#location GkeonpremVmwareNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#name GkeonpremVmwareNodePool#name}

---

##### `vmwareCluster`<sup>Required</sup> <a name="vmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.vmwareCluster"></a>

- *Type:* java.lang.String

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#vmware_cluster GkeonpremVmwareNodePool#vmware_cluster}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#annotations GkeonpremVmwareNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#display_name GkeonpremVmwareNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodePoolAutoscaling`<sup>Optional</sup> <a name="nodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.nodePoolAutoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#node_pool_autoscaling GkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#timeouts GkeonpremVmwareNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling">putNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling">resetNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig"></a>

```java
public void putConfig(GkeonpremVmwareNodePoolConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `putNodePoolAutoscaling` <a name="putNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling"></a>

```java
public void putNodePoolAutoscaling(GkeonpremVmwareNodePoolNodePoolAutoscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts"></a>

```java
public void putTimeouts(GkeonpremVmwareNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetNodePoolAutoscaling` <a name="resetNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling"></a>

```java
public void resetNodePoolAutoscaling()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePool;

GkeonpremVmwareNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePool;

GkeonpremVmwareNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePool;

GkeonpremVmwareNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePool;

GkeonpremVmwareNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GkeonpremVmwareNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GkeonpremVmwareNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GkeonpremVmwareNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling">nodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion">onPremVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput">nodePoolAutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput">vmwareClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster">vmwareCluster</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config"></a>

```java
public GkeonpremVmwareNodePoolConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `nodePoolAutoscaling`<sup>Required</sup> <a name="nodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling"></a>

```java
public GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference getNodePoolAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a>

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion"></a>

```java
public java.lang.String getOnPremVersion();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status"></a>

```java
public GkeonpremVmwareNodePoolStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts"></a>

```java
public GkeonpremVmwareNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput"></a>

```java
public GkeonpremVmwareNodePoolConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodePoolAutoscalingInput`<sup>Optional</sup> <a name="nodePoolAutoscalingInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput"></a>

```java
public GkeonpremVmwareNodePoolNodePoolAutoscaling getNodePoolAutoscalingInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---

##### `vmwareClusterInput`<sup>Optional</sup> <a name="vmwareClusterInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput"></a>

```java
public java.lang.String getVmwareClusterInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `vmwareCluster`<sup>Required</sup> <a name="vmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster"></a>

```java
public java.lang.String getVmwareCluster();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareNodePoolConfig <a name="GkeonpremVmwareNodePoolConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfig;

GkeonpremVmwareNodePoolConfig.builder()
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
    .config(GkeonpremVmwareNodePoolConfigA)
    .location(java.lang.String)
    .name(java.lang.String)
    .vmwareCluster(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .nodePoolAutoscaling(GkeonpremVmwareNodePoolNodePoolAutoscaling)
//  .project(java.lang.String)
//  .timeouts(GkeonpremVmwareNodePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster">vmwareCluster</a></code> | <code>java.lang.String</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling">nodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config"></a>

```java
public GkeonpremVmwareNodePoolConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#config GkeonpremVmwareNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#location GkeonpremVmwareNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#name GkeonpremVmwareNodePool#name}

---

##### `vmwareCluster`<sup>Required</sup> <a name="vmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster"></a>

```java
public java.lang.String getVmwareCluster();
```

- *Type:* java.lang.String

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#vmware_cluster GkeonpremVmwareNodePool#vmware_cluster}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#annotations GkeonpremVmwareNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#display_name GkeonpremVmwareNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodePoolAutoscaling`<sup>Optional</sup> <a name="nodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling"></a>

```java
public GkeonpremVmwareNodePoolNodePoolAutoscaling getNodePoolAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#node_pool_autoscaling GkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts"></a>

```java
public GkeonpremVmwareNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#timeouts GkeonpremVmwareNodePool#timeouts}

---

### GkeonpremVmwareNodePoolConfigA <a name="GkeonpremVmwareNodePoolConfigA" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigA;

GkeonpremVmwareNodePoolConfigA.builder()
    .imageType(java.lang.String)
//  .bootDiskSizeGb(java.lang.Number)
//  .cpus(java.lang.Number)
//  .enableLoadBalancer(java.lang.Boolean)
//  .enableLoadBalancer(IResolvable)
//  .image(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .memoryMb(java.lang.Number)
//  .replicas(java.lang.Number)
//  .taints(IResolvable)
//  .taints(java.util.List<GkeonpremVmwareNodePoolConfigTaints>)
//  .vsphereConfig(GkeonpremVmwareNodePoolConfigVsphereConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType">imageType</a></code> | <code>java.lang.String</code> | The OS image to be used for each node in a node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | VMware disk size to be used during creation. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus">cpus</a></code> | <code>java.lang.Number</code> | The number of CPUs for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer">enableLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image">image</a></code> | <code>java.lang.String</code> | The OS image name in vCenter, only valid when using Windows. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb">memoryMb</a></code> | <code>java.lang.Number</code> | The megabytes of memory for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | The number of nodes in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>></code> | taints block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | vsphere_config block. |

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

The OS image to be used for each node in a node pool.

Currently 'cos', 'ubuntu', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#image_type GkeonpremVmwareNodePool#image_type}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#boot_disk_size_gb GkeonpremVmwareNodePool#boot_disk_size_gb}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus"></a>

```java
public java.lang.Number getCpus();
```

- *Type:* java.lang.Number

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#cpus GkeonpremVmwareNodePool#cpus}

---

##### `enableLoadBalancer`<sup>Optional</sup> <a name="enableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer"></a>

```java
public java.lang.Object getEnableLoadBalancer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#enable_load_balancer GkeonpremVmwareNodePool#enable_load_balancer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#image GkeonpremVmwareNodePool#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#labels GkeonpremVmwareNodePool#labels}

---

##### `memoryMb`<sup>Optional</sup> <a name="memoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb"></a>

```java
public java.lang.Number getMemoryMb();
```

- *Type:* java.lang.Number

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#memory_mb GkeonpremVmwareNodePool#memory_mb}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#replicas GkeonpremVmwareNodePool#replicas}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints"></a>

```java
public java.lang.Object getTaints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#taints GkeonpremVmwareNodePool#taints}

---

##### `vsphereConfig`<sup>Optional</sup> <a name="vsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.vsphereConfig"></a>

```java
public GkeonpremVmwareNodePoolConfigVsphereConfig getVsphereConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

vsphere_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#vsphere_config GkeonpremVmwareNodePool#vsphere_config}

---

### GkeonpremVmwareNodePoolConfigTaints <a name="GkeonpremVmwareNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigTaints;

GkeonpremVmwareNodePoolConfigTaints.builder()
    .key(java.lang.String)
    .value(java.lang.String)
//  .effect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key">key</a></code> | <code>java.lang.String</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value">value</a></code> | <code>java.lang.String</code> | Value associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#key GkeonpremVmwareNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#value GkeonpremVmwareNodePool#value}

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#effect GkeonpremVmwareNodePool#effect}

---

### GkeonpremVmwareNodePoolConfigVsphereConfig <a name="GkeonpremVmwareNodePoolConfigVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigVsphereConfig;

GkeonpremVmwareNodePoolConfigVsphereConfig.builder()
//  .datastore(java.lang.String)
//  .hostGroups(java.util.List<java.lang.String>)
//  .tags(IResolvable)
//  .tags(java.util.List<GkeonpremVmwareNodePoolConfigVsphereConfigTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore">datastore</a></code> | <code>java.lang.String</code> | The name of the vCenter datastore. Inherited from the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups">hostGroups</a></code> | <code>java.util.List<java.lang.String></code> | Vsphere host groups to apply to all VMs in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>></code> | tags block. |

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

The name of the vCenter datastore. Inherited from the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#datastore GkeonpremVmwareNodePool#datastore}

---

##### `hostGroups`<sup>Optional</sup> <a name="hostGroups" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups"></a>

```java
public java.util.List<java.lang.String> getHostGroups();
```

- *Type:* java.util.List<java.lang.String>

Vsphere host groups to apply to all VMs in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#host_groups GkeonpremVmwareNodePool#host_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#tags GkeonpremVmwareNodePool#tags}

---

### GkeonpremVmwareNodePoolConfigVsphereConfigTags <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigVsphereConfigTags;

GkeonpremVmwareNodePoolConfigVsphereConfigTags.builder()
//  .category(java.lang.String)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category">category</a></code> | <code>java.lang.String</code> | The Vsphere tag category. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag">tag</a></code> | <code>java.lang.String</code> | The Vsphere tag name. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The Vsphere tag category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#category GkeonpremVmwareNodePool#category}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

The Vsphere tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#tag GkeonpremVmwareNodePool#tag}

---

### GkeonpremVmwareNodePoolNodePoolAutoscaling <a name="GkeonpremVmwareNodePoolNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolNodePoolAutoscaling;

GkeonpremVmwareNodePoolNodePoolAutoscaling.builder()
    .maxReplicas(java.lang.Number)
    .minReplicas(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | Maximum number of replicas in the NodePool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | Minimum number of replicas in the NodePool. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#max_replicas GkeonpremVmwareNodePool#max_replicas}

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#min_replicas GkeonpremVmwareNodePool#min_replicas}

---

### GkeonpremVmwareNodePoolStatus <a name="GkeonpremVmwareNodePoolStatus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolStatus;

GkeonpremVmwareNodePoolStatus.builder()
    .build();
```


### GkeonpremVmwareNodePoolStatusConditions <a name="GkeonpremVmwareNodePoolStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolStatusConditions;

GkeonpremVmwareNodePoolStatusConditions.builder()
    .build();
```


### GkeonpremVmwareNodePoolTimeouts <a name="GkeonpremVmwareNodePoolTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolTimeouts;

GkeonpremVmwareNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareNodePoolConfigAOutputReference <a name="GkeonpremVmwareNodePoolConfigAOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigAOutputReference;

new GkeonpremVmwareNodePoolConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig">putVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer">resetEnableLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb">resetMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig">resetVsphereConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints"></a>

```java
public void putTaints(IResolvable OR java.util.List<GkeonpremVmwareNodePoolConfigTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>>

---

##### `putVsphereConfig` <a name="putVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig"></a>

```java
public void putVsphereConfig(GkeonpremVmwareNodePoolConfigVsphereConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus"></a>

```java
public void resetCpus()
```

##### `resetEnableLoadBalancer` <a name="resetEnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer"></a>

```java
public void resetEnableLoadBalancer()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMemoryMb` <a name="resetMemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb"></a>

```java
public void resetMemoryMb()
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas"></a>

```java
public void resetReplicas()
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints"></a>

```java
public void resetTaints()
```

##### `resetVsphereConfig` <a name="resetVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig"></a>

```java
public void resetVsphereConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput">cpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput">enableLoadBalancerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput">memoryMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput">replicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput">taintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput">vsphereConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus">cpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer">enableLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb">memoryMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints"></a>

```java
public GkeonpremVmwareNodePoolConfigTaintsList getTaints();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a>

---

##### `vsphereConfig`<sup>Required</sup> <a name="vsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig"></a>

```java
public GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference getVsphereConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput"></a>

```java
public java.lang.Number getCpusInput();
```

- *Type:* java.lang.Number

---

##### `enableLoadBalancerInput`<sup>Optional</sup> <a name="enableLoadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput"></a>

```java
public java.lang.Object getEnableLoadBalancerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```java
public java.lang.String getImageTypeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `memoryMbInput`<sup>Optional</sup> <a name="memoryMbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput"></a>

```java
public java.lang.Number getMemoryMbInput();
```

- *Type:* java.lang.Number

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput"></a>

```java
public java.lang.Number getReplicasInput();
```

- *Type:* java.lang.Number

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput"></a>

```java
public java.lang.Object getTaintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>>

---

##### `vsphereConfigInput`<sup>Optional</sup> <a name="vsphereConfigInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput"></a>

```java
public GkeonpremVmwareNodePoolConfigVsphereConfig getVsphereConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus"></a>

```java
public java.lang.Number getCpus();
```

- *Type:* java.lang.Number

---

##### `enableLoadBalancer`<sup>Required</sup> <a name="enableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer"></a>

```java
public java.lang.Object getEnableLoadBalancer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `memoryMb`<sup>Required</sup> <a name="memoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb"></a>

```java
public java.lang.Number getMemoryMb();
```

- *Type:* java.lang.Number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareNodePoolConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---


### GkeonpremVmwareNodePoolConfigTaintsList <a name="GkeonpremVmwareNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigTaintsList;

new GkeonpremVmwareNodePoolConfigTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get"></a>

```java
public GkeonpremVmwareNodePoolConfigTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>>

---


### GkeonpremVmwareNodePoolConfigTaintsOutputReference <a name="GkeonpremVmwareNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigTaintsOutputReference;

new GkeonpremVmwareNodePoolConfigTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect"></a>

```java
public void resetEffect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>

---


### GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference;

new GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups">resetHostGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<GkeonpremVmwareNodePoolConfigVsphereConfigTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>>

---

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore"></a>

```java
public void resetDatastore()
```

##### `resetHostGroups` <a name="resetHostGroups" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups"></a>

```java
public void resetHostGroups()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput">hostGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore">datastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups">hostGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags"></a>

```java
public GkeonpremVmwareNodePoolConfigVsphereConfigTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a>

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput"></a>

```java
public java.lang.String getDatastoreInput();
```

- *Type:* java.lang.String

---

##### `hostGroupsInput`<sup>Optional</sup> <a name="hostGroupsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput"></a>

```java
public java.util.List<java.lang.String> getHostGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

---

##### `hostGroups`<sup>Required</sup> <a name="hostGroups" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups"></a>

```java
public java.util.List<java.lang.String> getHostGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareNodePoolConfigVsphereConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsList <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList;

new GkeonpremVmwareNodePoolConfigVsphereConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get"></a>

```java
public GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>>

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference;

new GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>

---


### GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference <a name="GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference;

new GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareNodePoolNodePoolAutoscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---


### GkeonpremVmwareNodePoolStatusConditionsList <a name="GkeonpremVmwareNodePoolStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolStatusConditionsList;

new GkeonpremVmwareNodePoolStatusConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get"></a>

```java
public GkeonpremVmwareNodePoolStatusConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareNodePoolStatusConditionsOutputReference <a name="GkeonpremVmwareNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolStatusConditionsOutputReference;

new GkeonpremVmwareNodePoolStatusConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareNodePoolStatusConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a>

---


### GkeonpremVmwareNodePoolStatusList <a name="GkeonpremVmwareNodePoolStatusList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolStatusList;

new GkeonpremVmwareNodePoolStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get"></a>

```java
public GkeonpremVmwareNodePoolStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareNodePoolStatusOutputReference <a name="GkeonpremVmwareNodePoolStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolStatusOutputReference;

new GkeonpremVmwareNodePoolStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions"></a>

```java
public GkeonpremVmwareNodePoolStatusConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareNodePoolStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a>

---


### GkeonpremVmwareNodePoolTimeoutsOutputReference <a name="GkeonpremVmwareNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_node_pool.GkeonpremVmwareNodePoolTimeoutsOutputReference;

new GkeonpremVmwareNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---



