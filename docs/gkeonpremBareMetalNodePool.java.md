# `gkeonpremBareMetalNodePool` Submodule <a name="`gkeonpremBareMetalNodePool` Submodule" id="@cdktf/provider-google.gkeonpremBareMetalNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremBareMetalNodePool <a name="GkeonpremBareMetalNodePool" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool google_gkeonprem_bare_metal_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePool;

GkeonpremBareMetalNodePool.Builder.create(Construct scope, java.lang.String id)
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
    .bareMetalCluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .nodePoolConfig(GkeonpremBareMetalNodePoolNodePoolConfig)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GkeonpremBareMetalNodePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.bareMetalCluster">bareMetalCluster</a></code> | <code>java.lang.String</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The bare metal node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.bareMetalCluster"></a>

- *Type:* java.lang.String

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#bare_metal_cluster GkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#location GkeonpremBareMetalNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#name GkeonpremBareMetalNodePool#name}

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.nodePoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#node_pool_config GkeonpremBareMetalNodePool#node_pool_config}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#annotations GkeonpremBareMetalNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#display_name GkeonpremBareMetalNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#timeouts GkeonpremBareMetalNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig">putNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNodePoolConfig` <a name="putNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig"></a>

```java
public void putNodePoolConfig(GkeonpremBareMetalNodePoolNodePoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts"></a>

```java
public void putTimeouts(GkeonpremBareMetalNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePool;

GkeonpremBareMetalNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePool;

GkeonpremBareMetalNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePool;

GkeonpremBareMetalNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePool;

GkeonpremBareMetalNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GkeonpremBareMetalNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GkeonpremBareMetalNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GkeonpremBareMetalNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremBareMetalNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList">GkeonpremBareMetalNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference">GkeonpremBareMetalNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalClusterInput">bareMetalClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfigInput">nodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalCluster">bareMetalCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfig"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfigOutputReference getNodePoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.status"></a>

```java
public GkeonpremBareMetalNodePoolStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList">GkeonpremBareMetalNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeouts"></a>

```java
public GkeonpremBareMetalNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference">GkeonpremBareMetalNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bareMetalClusterInput`<sup>Optional</sup> <a name="bareMetalClusterInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalClusterInput"></a>

```java
public java.lang.String getBareMetalClusterInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodePoolConfigInput`<sup>Optional</sup> <a name="nodePoolConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfigInput"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfig getNodePoolConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalCluster"></a>

```java
public java.lang.String getBareMetalCluster();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremBareMetalNodePoolConfig <a name="GkeonpremBareMetalNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolConfig;

GkeonpremBareMetalNodePoolConfig.builder()
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
    .bareMetalCluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .nodePoolConfig(GkeonpremBareMetalNodePoolNodePoolConfig)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GkeonpremBareMetalNodePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.bareMetalCluster">bareMetalCluster</a></code> | <code>java.lang.String</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The bare metal node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.bareMetalCluster"></a>

```java
public java.lang.String getBareMetalCluster();
```

- *Type:* java.lang.String

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#bare_metal_cluster GkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#location GkeonpremBareMetalNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#name GkeonpremBareMetalNodePool#name}

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.nodePoolConfig"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfig getNodePoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#node_pool_config GkeonpremBareMetalNodePool#node_pool_config}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#annotations GkeonpremBareMetalNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#display_name GkeonpremBareMetalNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.timeouts"></a>

```java
public GkeonpremBareMetalNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#timeouts GkeonpremBareMetalNodePool#timeouts}

---

### GkeonpremBareMetalNodePoolNodePoolConfig <a name="GkeonpremBareMetalNodePoolNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfig;

GkeonpremBareMetalNodePoolNodePoolConfig.builder()
    .nodeConfigs(IResolvable)
    .nodeConfigs(java.util.List<GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .operatingSystem(java.lang.String)
//  .taints(IResolvable)
//  .taints(java.util.List<GkeonpremBareMetalNodePoolNodePoolConfigTaints>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs">nodeConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>></code> | node_configs block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>></code> | taints block. |

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs"></a>

```java
public java.lang.Object getNodeConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#node_configs GkeonpremBareMetalNodePool#node_configs}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#operating_system GkeonpremBareMetalNodePool#operating_system}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.taints"></a>

```java
public java.lang.Object getTaints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#taints GkeonpremBareMetalNodePool#taints}

---

### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs;

GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.builder()
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp">nodeIp</a></code> | <code>java.lang.String</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}

---

##### `nodeIp`<sup>Optional</sup> <a name="nodeIp" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp"></a>

```java
public java.lang.String getNodeIp();
```

- *Type:* java.lang.String

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#node_ip GkeonpremBareMetalNodePool#node_ip}

---

### GkeonpremBareMetalNodePoolNodePoolConfigTaints <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfigTaints;

GkeonpremBareMetalNodePoolNodePoolConfigTaints.builder()
//  .effect(java.lang.String)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key">key</a></code> | <code>java.lang.String</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value">value</a></code> | <code>java.lang.String</code> | Value associated with the effect. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#effect GkeonpremBareMetalNodePool#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#key GkeonpremBareMetalNodePool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#value GkeonpremBareMetalNodePool#value}

---

### GkeonpremBareMetalNodePoolStatus <a name="GkeonpremBareMetalNodePoolStatus" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolStatus;

GkeonpremBareMetalNodePoolStatus.builder()
    .build();
```


### GkeonpremBareMetalNodePoolStatusConditions <a name="GkeonpremBareMetalNodePoolStatusConditions" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolStatusConditions;

GkeonpremBareMetalNodePoolStatusConditions.builder()
    .build();
```


### GkeonpremBareMetalNodePoolTimeouts <a name="GkeonpremBareMetalNodePoolTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolTimeouts;

GkeonpremBareMetalNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList;

new GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

---


### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference;

new GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp">resetNodeIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNodeIp` <a name="resetNodeIp" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```java
public void resetNodeIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">nodeIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp">nodeIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeIpInput`<sup>Optional</sup> <a name="nodeIpInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```java
public java.lang.String getNodeIpInput();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeIp`<sup>Required</sup> <a name="nodeIp" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```java
public java.lang.String getNodeIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>

---


### GkeonpremBareMetalNodePoolNodePoolConfigOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference;

new GkeonpremBareMetalNodePoolNodePoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs">putNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeConfigs` <a name="putNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs"></a>

```java
public void putNodeConfigs(IResolvable OR java.util.List<GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints"></a>

```java
public void putTaints(IResolvable OR java.util.List<GkeonpremBareMetalNodePoolNodePoolConfigTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints"></a>

```java
public void resetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs">nodeConfigs</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput">nodeConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput">taintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList getNodeConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfigTaintsList getTaints();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeConfigsInput`<sup>Optional</sup> <a name="nodeConfigsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```java
public java.lang.Object getNodeConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput"></a>

```java
public java.lang.Object getTaintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---


### GkeonpremBareMetalNodePoolNodePoolConfigTaintsList <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList;

new GkeonpremBareMetalNodePoolNodePoolConfigTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get"></a>

```java
public GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

---


### GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference;

new GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>

---


### GkeonpremBareMetalNodePoolStatusConditionsList <a name="GkeonpremBareMetalNodePoolStatusConditionsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolStatusConditionsList;

new GkeonpremBareMetalNodePoolStatusConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get"></a>

```java
public GkeonpremBareMetalNodePoolStatusConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremBareMetalNodePoolStatusConditionsOutputReference <a name="GkeonpremBareMetalNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference;

new GkeonpremBareMetalNodePoolStatusConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions">GkeonpremBareMetalNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```java
public GkeonpremBareMetalNodePoolStatusConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions">GkeonpremBareMetalNodePoolStatusConditions</a>

---


### GkeonpremBareMetalNodePoolStatusList <a name="GkeonpremBareMetalNodePoolStatusList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolStatusList;

new GkeonpremBareMetalNodePoolStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get"></a>

```java
public GkeonpremBareMetalNodePoolStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremBareMetalNodePoolStatusOutputReference <a name="GkeonpremBareMetalNodePoolStatusOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolStatusOutputReference;

new GkeonpremBareMetalNodePoolStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList">GkeonpremBareMetalNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus">GkeonpremBareMetalNodePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.conditions"></a>

```java
public GkeonpremBareMetalNodePoolStatusConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList">GkeonpremBareMetalNodePoolStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue"></a>

```java
public GkeonpremBareMetalNodePoolStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus">GkeonpremBareMetalNodePoolStatus</a>

---


### GkeonpremBareMetalNodePoolTimeoutsOutputReference <a name="GkeonpremBareMetalNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_bare_metal_node_pool.GkeonpremBareMetalNodePoolTimeoutsOutputReference;

new GkeonpremBareMetalNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

---



