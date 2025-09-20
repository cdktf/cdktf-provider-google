# `vertexAiFeaturestore` Submodule <a name="`vertexAiFeaturestore` Submodule" id="@cdktf/provider-google.vertexAiFeaturestore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeaturestore <a name="VertexAiFeaturestore" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore google_vertex_ai_featurestore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestore;

VertexAiFeaturestore.Builder.create(Construct scope, java.lang.String id)
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
//  .encryptionSpec(VertexAiFeaturestoreEncryptionSpec)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .onlineServingConfig(VertexAiFeaturestoreOnlineServingConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiFeaturestoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, any EntityTypes and Features for this Featurestore will also be deleted. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#id VertexAiFeaturestore#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Featurestore. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Featurestore. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.onlineServingConfig">onlineServingConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a></code> | online_serving_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#project VertexAiFeaturestore#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the dataset. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#encryption_spec VertexAiFeaturestore#encryption_spec}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, any EntityTypes and Features for this Featurestore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#force_destroy VertexAiFeaturestore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#id VertexAiFeaturestore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Featurestore.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#labels VertexAiFeaturestore#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Featurestore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#name VertexAiFeaturestore#name}

---

##### `onlineServingConfig`<sup>Optional</sup> <a name="onlineServingConfig" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.onlineServingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a>

online_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#online_serving_config VertexAiFeaturestore#online_serving_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#project VertexAiFeaturestore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the dataset. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#region VertexAiFeaturestore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#timeouts VertexAiFeaturestore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putOnlineServingConfig">putOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetOnlineServingConfig">resetOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VertexAiFeaturestoreEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a>

---

##### `putOnlineServingConfig` <a name="putOnlineServingConfig" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putOnlineServingConfig"></a>

```java
public void putOnlineServingConfig(VertexAiFeaturestoreOnlineServingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putOnlineServingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putTimeouts"></a>

```java
public void putTimeouts(VertexAiFeaturestoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a>

---

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetName"></a>

```java
public void resetName()
```

##### `resetOnlineServingConfig` <a name="resetOnlineServingConfig" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetOnlineServingConfig"></a>

```java
public void resetOnlineServingConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiFeaturestore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestore;

VertexAiFeaturestore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestore;

VertexAiFeaturestore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestore;

VertexAiFeaturestore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestore;

VertexAiFeaturestore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiFeaturestore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VertexAiFeaturestore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiFeaturestore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiFeaturestore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeaturestore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference">VertexAiFeaturestoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.onlineServingConfig">onlineServingConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference">VertexAiFeaturestoreOnlineServingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference">VertexAiFeaturestoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.onlineServingConfigInput">onlineServingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.encryptionSpec"></a>

```java
public VertexAiFeaturestoreEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference">VertexAiFeaturestoreEncryptionSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `onlineServingConfig`<sup>Required</sup> <a name="onlineServingConfig" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.onlineServingConfig"></a>

```java
public VertexAiFeaturestoreOnlineServingConfigOutputReference getOnlineServingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference">VertexAiFeaturestoreOnlineServingConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.timeouts"></a>

```java
public VertexAiFeaturestoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference">VertexAiFeaturestoreTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.encryptionSpecInput"></a>

```java
public VertexAiFeaturestoreEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onlineServingConfigInput`<sup>Optional</sup> <a name="onlineServingConfigInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.onlineServingConfigInput"></a>

```java
public VertexAiFeaturestoreOnlineServingConfig getOnlineServingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a>

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeaturestoreConfig <a name="VertexAiFeaturestoreConfig" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreConfig;

VertexAiFeaturestoreConfig.builder()
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
//  .encryptionSpec(VertexAiFeaturestoreEncryptionSpec)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .onlineServingConfig(VertexAiFeaturestoreOnlineServingConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiFeaturestoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, any EntityTypes and Features for this Featurestore will also be deleted. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#id VertexAiFeaturestore#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Featurestore. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Featurestore. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.onlineServingConfig">onlineServingConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a></code> | online_serving_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#project VertexAiFeaturestore#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the dataset. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.encryptionSpec"></a>

```java
public VertexAiFeaturestoreEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#encryption_spec VertexAiFeaturestore#encryption_spec}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, any EntityTypes and Features for this Featurestore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#force_destroy VertexAiFeaturestore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#id VertexAiFeaturestore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Featurestore.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#labels VertexAiFeaturestore#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Featurestore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#name VertexAiFeaturestore#name}

---

##### `onlineServingConfig`<sup>Optional</sup> <a name="onlineServingConfig" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.onlineServingConfig"></a>

```java
public VertexAiFeaturestoreOnlineServingConfig getOnlineServingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a>

online_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#online_serving_config VertexAiFeaturestore#online_serving_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#project VertexAiFeaturestore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the dataset. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#region VertexAiFeaturestore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreConfig.property.timeouts"></a>

```java
public VertexAiFeaturestoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#timeouts VertexAiFeaturestore#timeouts}

---

### VertexAiFeaturestoreEncryptionSpec <a name="VertexAiFeaturestoreEncryptionSpec" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreEncryptionSpec;

VertexAiFeaturestoreEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#kms_key_name VertexAiFeaturestore#kms_key_name}

---

### VertexAiFeaturestoreOnlineServingConfig <a name="VertexAiFeaturestoreOnlineServingConfig" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreOnlineServingConfig;

VertexAiFeaturestoreOnlineServingConfig.builder()
//  .fixedNodeCount(java.lang.Number)
//  .scaling(VertexAiFeaturestoreOnlineServingConfigScaling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount">fixedNodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes for each cluster. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling">VertexAiFeaturestoreOnlineServingConfigScaling</a></code> | scaling block. |

---

##### `fixedNodeCount`<sup>Optional</sup> <a name="fixedNodeCount" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount"></a>

```java
public java.lang.Number getFixedNodeCount();
```

- *Type:* java.lang.Number

The number of nodes for each cluster.

The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#fixed_node_count VertexAiFeaturestore#fixed_node_count}

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig.property.scaling"></a>

```java
public VertexAiFeaturestoreOnlineServingConfigScaling getScaling();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling">VertexAiFeaturestoreOnlineServingConfigScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#scaling VertexAiFeaturestore#scaling}

---

### VertexAiFeaturestoreOnlineServingConfigScaling <a name="VertexAiFeaturestoreOnlineServingConfigScaling" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreOnlineServingConfigScaling;

VertexAiFeaturestoreOnlineServingConfigScaling.builder()
    .maxNodeCount(java.lang.Number)
    .minNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

The maximum number of nodes to scale up to.

Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#max_node_count VertexAiFeaturestore#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#min_node_count VertexAiFeaturestore#min_node_count}

---

### VertexAiFeaturestoreTimeouts <a name="VertexAiFeaturestoreTimeouts" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreTimeouts;

VertexAiFeaturestoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#create VertexAiFeaturestore#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#delete VertexAiFeaturestore#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#update VertexAiFeaturestore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#create VertexAiFeaturestore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#delete VertexAiFeaturestore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_featurestore#update VertexAiFeaturestore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeaturestoreEncryptionSpecOutputReference <a name="VertexAiFeaturestoreEncryptionSpecOutputReference" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreEncryptionSpecOutputReference;

new VertexAiFeaturestoreEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VertexAiFeaturestoreEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreEncryptionSpec">VertexAiFeaturestoreEncryptionSpec</a>

---


### VertexAiFeaturestoreOnlineServingConfigOutputReference <a name="VertexAiFeaturestoreOnlineServingConfigOutputReference" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreOnlineServingConfigOutputReference;

new VertexAiFeaturestoreOnlineServingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling">putScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount">resetFixedNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling">resetScaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaling` <a name="putScaling" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling"></a>

```java
public void putScaling(VertexAiFeaturestoreOnlineServingConfigScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling">VertexAiFeaturestoreOnlineServingConfigScaling</a>

---

##### `resetFixedNodeCount` <a name="resetFixedNodeCount" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount"></a>

```java
public void resetFixedNodeCount()
```

##### `resetScaling` <a name="resetScaling" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling"></a>

```java
public void resetScaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference">VertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput">fixedNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput">scalingInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling">VertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount">fixedNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling"></a>

```java
public VertexAiFeaturestoreOnlineServingConfigScalingOutputReference getScaling();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference">VertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a>

---

##### `fixedNodeCountInput`<sup>Optional</sup> <a name="fixedNodeCountInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput"></a>

```java
public java.lang.Number getFixedNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `scalingInput`<sup>Optional</sup> <a name="scalingInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput"></a>

```java
public VertexAiFeaturestoreOnlineServingConfigScaling getScalingInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling">VertexAiFeaturestoreOnlineServingConfigScaling</a>

---

##### `fixedNodeCount`<sup>Required</sup> <a name="fixedNodeCount" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount"></a>

```java
public java.lang.Number getFixedNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue"></a>

```java
public VertexAiFeaturestoreOnlineServingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfig">VertexAiFeaturestoreOnlineServingConfig</a>

---


### VertexAiFeaturestoreOnlineServingConfigScalingOutputReference <a name="VertexAiFeaturestoreOnlineServingConfigScalingOutputReference" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference;

new VertexAiFeaturestoreOnlineServingConfigScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling">VertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue"></a>

```java
public VertexAiFeaturestoreOnlineServingConfigScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreOnlineServingConfigScaling">VertexAiFeaturestoreOnlineServingConfigScaling</a>

---


### VertexAiFeaturestoreTimeoutsOutputReference <a name="VertexAiFeaturestoreTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore.VertexAiFeaturestoreTimeoutsOutputReference;

new VertexAiFeaturestoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestore.VertexAiFeaturestoreTimeouts">VertexAiFeaturestoreTimeouts</a>

---



