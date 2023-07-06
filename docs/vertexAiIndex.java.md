# `google_vertex_ai_index`

Refer to the Terraform Registory for docs: [`google_vertex_ai_index`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index).

# `vertexAiIndex` Submodule <a name="`vertexAiIndex` Submodule" id="@cdktf/provider-google.vertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndex <a name="VertexAiIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndex;

VertexAiIndex.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .indexUpdateMethod(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(VertexAiIndexMetadata)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiIndexTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#id VertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.indexUpdateMethod">indexUpdateMethod</a></code> | <code>java.lang.String</code> | The update method to use with this Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#project VertexAiIndex#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#display_name VertexAiIndex#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#description VertexAiIndex#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#id VertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexUpdateMethod`<sup>Optional</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.indexUpdateMethod"></a>

- *Type:* java.lang.String

The update method to use with this Index.

The value must be the followings. If not set, BATCH_UPDATE will be used by default.
BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#index_update_method VertexAiIndex#index_update_method}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#labels VertexAiIndex#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#metadata VertexAiIndex#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#project VertexAiIndex#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#region VertexAiIndex#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#timeouts VertexAiIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetIndexUpdateMethod">resetIndexUpdateMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata"></a>

```java
public void putMetadata(VertexAiIndexMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts"></a>

```java
public void putTimeouts(VertexAiIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetId"></a>

```java
public void resetId()
```

##### `resetIndexUpdateMethod` <a name="resetIndexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetIndexUpdateMethod"></a>

```java
public void resetIndexUpdateMethod()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndex;

VertexAiIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndex;

VertexAiIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndex;

VertexAiIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.deployedIndexes">deployedIndexes</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList">VertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexStats">indexStats</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList">VertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference">VertexAiIndexMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataSchemaUri">metadataSchemaUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference">VertexAiIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethodInput">indexUpdateMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethod">indexUpdateMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deployedIndexes`<sup>Required</sup> <a name="deployedIndexes" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.deployedIndexes"></a>

```java
public VertexAiIndexDeployedIndexesList getDeployedIndexes();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList">VertexAiIndexDeployedIndexesList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `indexStats`<sup>Required</sup> <a name="indexStats" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexStats"></a>

```java
public VertexAiIndexIndexStatsList getIndexStats();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList">VertexAiIndexIndexStatsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadata"></a>

```java
public VertexAiIndexMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference">VertexAiIndexMetadataOutputReference</a>

---

##### `metadataSchemaUri`<sup>Required</sup> <a name="metadataSchemaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataSchemaUri"></a>

```java
public java.lang.String getMetadataSchemaUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeouts"></a>

```java
public VertexAiIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference">VertexAiIndexTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexUpdateMethodInput`<sup>Optional</sup> <a name="indexUpdateMethodInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethodInput"></a>

```java
public java.lang.String getIndexUpdateMethodInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataInput"></a>

```java
public VertexAiIndexMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexUpdateMethod`<sup>Required</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethod"></a>

```java
public java.lang.String getIndexUpdateMethod();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexConfig <a name="VertexAiIndexConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexConfig;

VertexAiIndexConfig.builder()
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
    .displayName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .indexUpdateMethod(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(VertexAiIndexMetadata)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiIndexTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#id VertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.indexUpdateMethod">indexUpdateMethod</a></code> | <code>java.lang.String</code> | The update method to use with this Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#project VertexAiIndex#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#display_name VertexAiIndex#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#description VertexAiIndex#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#id VertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexUpdateMethod`<sup>Optional</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.indexUpdateMethod"></a>

```java
public java.lang.String getIndexUpdateMethod();
```

- *Type:* java.lang.String

The update method to use with this Index.

The value must be the followings. If not set, BATCH_UPDATE will be used by default.
BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#index_update_method VertexAiIndex#index_update_method}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#labels VertexAiIndex#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.metadata"></a>

```java
public VertexAiIndexMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#metadata VertexAiIndex#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#project VertexAiIndex#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#region VertexAiIndex#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.timeouts"></a>

```java
public VertexAiIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#timeouts VertexAiIndex#timeouts}

---

### VertexAiIndexDeployedIndexes <a name="VertexAiIndexDeployedIndexes" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexDeployedIndexes;

VertexAiIndexDeployedIndexes.builder()
    .build();
```


### VertexAiIndexIndexStats <a name="VertexAiIndexIndexStats" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexIndexStats;

VertexAiIndexIndexStats.builder()
    .build();
```


### VertexAiIndexMetadata <a name="VertexAiIndexMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadata;

VertexAiIndexMetadata.builder()
//  .config(VertexAiIndexMetadataConfig)
//  .contentsDeltaUri(java.lang.String)
//  .isCompleteOverwrite(java.lang.Boolean)
//  .isCompleteOverwrite(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.contentsDeltaUri">contentsDeltaUri</a></code> | <code>java.lang.String</code> | Allows inserting, updating  or deleting the contents of the Matching Engine Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.isCompleteOverwrite">isCompleteOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.config"></a>

```java
public VertexAiIndexMetadataConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#config VertexAiIndex#config}

---

##### `contentsDeltaUri`<sup>Optional</sup> <a name="contentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.contentsDeltaUri"></a>

```java
public java.lang.String getContentsDeltaUri();
```

- *Type:* java.lang.String

Allows inserting, updating  or deleting the contents of the Matching Engine Index.

The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#contents_delta_uri VertexAiIndex#contents_delta_uri}

---

##### `isCompleteOverwrite`<sup>Optional</sup> <a name="isCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.isCompleteOverwrite"></a>

```java
public java.lang.Object getIsCompleteOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#is_complete_overwrite VertexAiIndex#is_complete_overwrite}

---

### VertexAiIndexMetadataConfig <a name="VertexAiIndexMetadataConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfig;

VertexAiIndexMetadataConfig.builder()
    .dimensions(java.lang.Number)
//  .algorithmConfig(VertexAiIndexMetadataConfigAlgorithmConfig)
//  .approximateNeighborsCount(java.lang.Number)
//  .distanceMeasureType(java.lang.String)
//  .featureNormType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.dimensions">dimensions</a></code> | <code>java.lang.Number</code> | The number of dimensions of the input vectors. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.algorithmConfig">algorithmConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | algorithm_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.approximateNeighborsCount">approximateNeighborsCount</a></code> | <code>java.lang.Number</code> | The default number of neighbors to find via approximate search before exact reordering is performed. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.distanceMeasureType">distanceMeasureType</a></code> | <code>java.lang.String</code> | The distance measure used in nearest neighbor search. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.featureNormType">featureNormType</a></code> | <code>java.lang.String</code> | Type of normalization to be carried out on each vector. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.dimensions"></a>

```java
public java.lang.Number getDimensions();
```

- *Type:* java.lang.Number

The number of dimensions of the input vectors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#dimensions VertexAiIndex#dimensions}

---

##### `algorithmConfig`<sup>Optional</sup> <a name="algorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.algorithmConfig"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfig getAlgorithmConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

algorithm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#algorithm_config VertexAiIndex#algorithm_config}

---

##### `approximateNeighborsCount`<sup>Optional</sup> <a name="approximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.approximateNeighborsCount"></a>

```java
public java.lang.Number getApproximateNeighborsCount();
```

- *Type:* java.lang.Number

The default number of neighbors to find via approximate search before exact reordering is performed.

Exact reordering is a procedure where results returned by an
approximate search algorithm are reordered via a more expensive distance computation.
Required if tree-AH algorithm is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#approximate_neighbors_count VertexAiIndex#approximate_neighbors_count}

---

##### `distanceMeasureType`<sup>Optional</sup> <a name="distanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.distanceMeasureType"></a>

```java
public java.lang.String getDistanceMeasureType();
```

- *Type:* java.lang.String

The distance measure used in nearest neighbor search.

The value must be one of the followings:
SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
L1_DISTANCE: Manhattan (L_1) Distance
COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#distance_measure_type VertexAiIndex#distance_measure_type}

---

##### `featureNormType`<sup>Optional</sup> <a name="featureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.featureNormType"></a>

```java
public java.lang.String getFeatureNormType();
```

- *Type:* java.lang.String

Type of normalization to be carried out on each vector.

The value must be one of the followings:
UNIT_L2_NORM: Unit L2 normalization type
NONE: No normalization type is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#feature_norm_type VertexAiIndex#feature_norm_type}

---

### VertexAiIndexMetadataConfigAlgorithmConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfigAlgorithmConfig;

VertexAiIndexMetadataConfigAlgorithmConfig.builder()
//  .bruteForceConfig(VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig)
//  .treeAhConfig(VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | brute_force_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | tree_ah_config block. |

---

##### `bruteForceConfig`<sup>Optional</sup> <a name="bruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig getBruteForceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

brute_force_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#brute_force_config VertexAiIndex#brute_force_config}

---

##### `treeAhConfig`<sup>Optional</sup> <a name="treeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig getTreeAhConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

tree_ah_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#tree_ah_config VertexAiIndex#tree_ah_config}

---

### VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;

VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.builder()
    .build();
```


### VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;

VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.builder()
//  .leafNodeEmbeddingCount(java.lang.Number)
//  .leafNodesToSearchPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>java.lang.Number</code> | Number of embeddings on each leaf node. The default value is 1000 if not set. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent">leafNodesToSearchPercent</a></code> | <code>java.lang.Number</code> | The default percentage of leaf nodes that any query may be searched. |

---

##### `leafNodeEmbeddingCount`<sup>Optional</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount"></a>

```java
public java.lang.Number getLeafNodeEmbeddingCount();
```

- *Type:* java.lang.Number

Number of embeddings on each leaf node. The default value is 1000 if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#leaf_node_embedding_count VertexAiIndex#leaf_node_embedding_count}

---

##### `leafNodesToSearchPercent`<sup>Optional</sup> <a name="leafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent"></a>

```java
public java.lang.Number getLeafNodesToSearchPercent();
```

- *Type:* java.lang.Number

The default percentage of leaf nodes that any query may be searched.

Must be in
range 1-100, inclusive. The default value is 10 (means 10%) if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#leaf_nodes_to_search_percent VertexAiIndex#leaf_nodes_to_search_percent}

---

### VertexAiIndexTimeouts <a name="VertexAiIndexTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexTimeouts;

VertexAiIndexTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#create VertexAiIndex#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#delete VertexAiIndex#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#update VertexAiIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#create VertexAiIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#delete VertexAiIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/vertex_ai_index#update VertexAiIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexDeployedIndexesList <a name="VertexAiIndexDeployedIndexesList" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexDeployedIndexesList;

new VertexAiIndexDeployedIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get"></a>

```java
public VertexAiIndexDeployedIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiIndexDeployedIndexesOutputReference <a name="VertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexDeployedIndexesOutputReference;

new VertexAiIndexDeployedIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes">VertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```java
public java.lang.String getDeployedIndexId();
```

- *Type:* java.lang.String

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```java
public VertexAiIndexDeployedIndexes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes">VertexAiIndexDeployedIndexes</a>

---


### VertexAiIndexIndexStatsList <a name="VertexAiIndexIndexStatsList" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexIndexStatsList;

new VertexAiIndexIndexStatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get"></a>

```java
public VertexAiIndexIndexStatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiIndexIndexStatsOutputReference <a name="VertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexIndexStatsOutputReference;

new VertexAiIndexIndexStatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.shardsCount">shardsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.vectorsCount">vectorsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats">VertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shardsCount`<sup>Required</sup> <a name="shardsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```java
public java.lang.Number getShardsCount();
```

- *Type:* java.lang.Number

---

##### `vectorsCount`<sup>Required</sup> <a name="vectorsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```java
public java.lang.String getVectorsCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```java
public VertexAiIndexIndexStats getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats">VertexAiIndexIndexStats</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference;

new VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference;

new VertexAiIndexMetadataConfigAlgorithmConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig">putBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig">putTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig">resetBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig">resetTreeAhConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBruteForceConfig` <a name="putBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig"></a>

```java
public void putBruteForceConfig(VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `putTreeAhConfig` <a name="putTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig"></a>

```java
public void putTreeAhConfig(VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `resetBruteForceConfig` <a name="resetBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig"></a>

```java
public void resetBruteForceConfig()
```

##### `resetTreeAhConfig` <a name="resetTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig"></a>

```java
public void resetTreeAhConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput">bruteForceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput">treeAhConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bruteForceConfig`<sup>Required</sup> <a name="bruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference getBruteForceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a>

---

##### `treeAhConfig`<sup>Required</sup> <a name="treeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference getTreeAhConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a>

---

##### `bruteForceConfigInput`<sup>Optional</sup> <a name="bruteForceConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig getBruteForceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `treeAhConfigInput`<sup>Optional</sup> <a name="treeAhConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig getTreeAhConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference;

new VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount">resetLeafNodeEmbeddingCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent">resetLeafNodesToSearchPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeafNodeEmbeddingCount` <a name="resetLeafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount"></a>

```java
public void resetLeafNodeEmbeddingCount()
```

##### `resetLeafNodesToSearchPercent` <a name="resetLeafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent"></a>

```java
public void resetLeafNodesToSearchPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput">leafNodeEmbeddingCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput">leafNodesToSearchPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">leafNodesToSearchPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `leafNodeEmbeddingCountInput`<sup>Optional</sup> <a name="leafNodeEmbeddingCountInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput"></a>

```java
public java.lang.Number getLeafNodeEmbeddingCountInput();
```

- *Type:* java.lang.Number

---

##### `leafNodesToSearchPercentInput`<sup>Optional</sup> <a name="leafNodesToSearchPercentInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput"></a>

```java
public java.lang.Number getLeafNodesToSearchPercentInput();
```

- *Type:* java.lang.Number

---

##### `leafNodeEmbeddingCount`<sup>Required</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```java
public java.lang.Number getLeafNodeEmbeddingCount();
```

- *Type:* java.lang.Number

---

##### `leafNodesToSearchPercent`<sup>Required</sup> <a name="leafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```java
public java.lang.Number getLeafNodesToSearchPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### VertexAiIndexMetadataConfigOutputReference <a name="VertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataConfigOutputReference;

new VertexAiIndexMetadataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig">putAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig">resetAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount">resetApproximateNeighborsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType">resetDistanceMeasureType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetFeatureNormType">resetFeatureNormType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlgorithmConfig` <a name="putAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig"></a>

```java
public void putAlgorithmConfig(VertexAiIndexMetadataConfigAlgorithmConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `resetAlgorithmConfig` <a name="resetAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig"></a>

```java
public void resetAlgorithmConfig()
```

##### `resetApproximateNeighborsCount` <a name="resetApproximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount"></a>

```java
public void resetApproximateNeighborsCount()
```

##### `resetDistanceMeasureType` <a name="resetDistanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType"></a>

```java
public void resetDistanceMeasureType()
```

##### `resetFeatureNormType` <a name="resetFeatureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetFeatureNormType"></a>

```java
public void resetFeatureNormType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">algorithmConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput">algorithmConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput">approximateNeighborsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput">distanceMeasureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput">featureNormTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">approximateNeighborsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensions">dimensions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">distanceMeasureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormType">featureNormType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmConfig`<sup>Required</sup> <a name="algorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfigOutputReference getAlgorithmConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a>

---

##### `algorithmConfigInput`<sup>Optional</sup> <a name="algorithmConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput"></a>

```java
public VertexAiIndexMetadataConfigAlgorithmConfig getAlgorithmConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `approximateNeighborsCountInput`<sup>Optional</sup> <a name="approximateNeighborsCountInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput"></a>

```java
public java.lang.Number getApproximateNeighborsCountInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Number getDimensionsInput();
```

- *Type:* java.lang.Number

---

##### `distanceMeasureTypeInput`<sup>Optional</sup> <a name="distanceMeasureTypeInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput"></a>

```java
public java.lang.String getDistanceMeasureTypeInput();
```

- *Type:* java.lang.String

---

##### `featureNormTypeInput`<sup>Optional</sup> <a name="featureNormTypeInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput"></a>

```java
public java.lang.String getFeatureNormTypeInput();
```

- *Type:* java.lang.String

---

##### `approximateNeighborsCount`<sup>Required</sup> <a name="approximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```java
public java.lang.Number getApproximateNeighborsCount();
```

- *Type:* java.lang.Number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```java
public java.lang.Number getDimensions();
```

- *Type:* java.lang.Number

---

##### `distanceMeasureType`<sup>Required</sup> <a name="distanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```java
public java.lang.String getDistanceMeasureType();
```

- *Type:* java.lang.String

---

##### `featureNormType`<sup>Required</sup> <a name="featureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```java
public java.lang.String getFeatureNormType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```java
public VertexAiIndexMetadataConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---


### VertexAiIndexMetadataOutputReference <a name="VertexAiIndexMetadataOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexMetadataOutputReference;

new VertexAiIndexMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetContentsDeltaUri">resetContentsDeltaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite">resetIsCompleteOverwrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig"></a>

```java
public void putConfig(VertexAiIndexMetadataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetContentsDeltaUri` <a name="resetContentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetContentsDeltaUri"></a>

```java
public void resetContentsDeltaUri()
```

##### `resetIsCompleteOverwrite` <a name="resetIsCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite"></a>

```java
public void resetIsCompleteOverwrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference">VertexAiIndexMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput">contentsDeltaUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput">isCompleteOverwriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUri">contentsDeltaUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">isCompleteOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.config"></a>

```java
public VertexAiIndexMetadataConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference">VertexAiIndexMetadataConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.configInput"></a>

```java
public VertexAiIndexMetadataConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---

##### `contentsDeltaUriInput`<sup>Optional</sup> <a name="contentsDeltaUriInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput"></a>

```java
public java.lang.String getContentsDeltaUriInput();
```

- *Type:* java.lang.String

---

##### `isCompleteOverwriteInput`<sup>Optional</sup> <a name="isCompleteOverwriteInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput"></a>

```java
public java.lang.Object getIsCompleteOverwriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentsDeltaUri`<sup>Required</sup> <a name="contentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```java
public java.lang.String getContentsDeltaUri();
```

- *Type:* java.lang.String

---

##### `isCompleteOverwrite`<sup>Required</sup> <a name="isCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```java
public java.lang.Object getIsCompleteOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.internalValue"></a>

```java
public VertexAiIndexMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---


### VertexAiIndexTimeoutsOutputReference <a name="VertexAiIndexTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index.VertexAiIndexTimeoutsOutputReference;

new VertexAiIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

---



