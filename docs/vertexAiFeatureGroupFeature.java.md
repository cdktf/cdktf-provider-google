# `vertexAiFeatureGroupFeature` Submodule <a name="`vertexAiFeatureGroupFeature` Submodule" id="@cdktf/provider-google.vertexAiFeatureGroupFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureGroupFeature <a name="VertexAiFeatureGroupFeature" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature google_vertex_ai_feature_group_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeature;

VertexAiFeatureGroupFeature.Builder.create(Construct scope, java.lang.String id)
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
    .featureGroup(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(VertexAiFeatureGroupFeatureTimeouts)
//  .versionColumnName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.featureGroup">featureGroup</a></code> | <code>java.lang.String</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName">versionColumnName</a></code> | <code>java.lang.String</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureGroup`<sup>Required</sup> <a name="featureGroup" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.featureGroup"></a>

- *Type:* java.lang.String

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#feature_group VertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#name VertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#region VertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#description VertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#labels VertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#timeouts VertexAiFeatureGroupFeature#timeouts}

---

##### `versionColumnName`<sup>Optional</sup> <a name="versionColumnName" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName"></a>

- *Type:* java.lang.String

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#version_column_name VertexAiFeatureGroupFeature#version_column_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetVersionColumnName">resetVersionColumnName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts"></a>

```java
public void putTimeouts(VertexAiFeatureGroupFeatureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionColumnName` <a name="resetVersionColumnName" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetVersionColumnName"></a>

```java
public void resetVersionColumnName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeature;

VertexAiFeatureGroupFeature.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeature;

VertexAiFeatureGroupFeature.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeature;

VertexAiFeatureGroupFeature.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeature;

VertexAiFeatureGroupFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiFeatureGroupFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiFeatureGroupFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiFeatureGroupFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureGroupFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference">VertexAiFeatureGroupFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroupInput">featureGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnNameInput">versionColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroup">featureGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnName">versionColumnName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeouts"></a>

```java
public VertexAiFeatureGroupFeatureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference">VertexAiFeatureGroupFeatureTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `featureGroupInput`<sup>Optional</sup> <a name="featureGroupInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroupInput"></a>

```java
public java.lang.String getFeatureGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>

---

##### `versionColumnNameInput`<sup>Optional</sup> <a name="versionColumnNameInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnNameInput"></a>

```java
public java.lang.String getVersionColumnNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `featureGroup`<sup>Required</sup> <a name="featureGroup" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroup"></a>

```java
public java.lang.String getFeatureGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `versionColumnName`<sup>Required</sup> <a name="versionColumnName" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnName"></a>

```java
public java.lang.String getVersionColumnName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureGroupFeatureConfig <a name="VertexAiFeatureGroupFeatureConfig" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeatureConfig;

VertexAiFeatureGroupFeatureConfig.builder()
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
    .featureGroup(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(VertexAiFeatureGroupFeatureTimeouts)
//  .versionColumnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.featureGroup">featureGroup</a></code> | <code>java.lang.String</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.versionColumnName">versionColumnName</a></code> | <code>java.lang.String</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureGroup`<sup>Required</sup> <a name="featureGroup" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.featureGroup"></a>

```java
public java.lang.String getFeatureGroup();
```

- *Type:* java.lang.String

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#feature_group VertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#name VertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#region VertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#description VertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#labels VertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.timeouts"></a>

```java
public VertexAiFeatureGroupFeatureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#timeouts VertexAiFeatureGroupFeature#timeouts}

---

##### `versionColumnName`<sup>Optional</sup> <a name="versionColumnName" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.versionColumnName"></a>

```java
public java.lang.String getVersionColumnName();
```

- *Type:* java.lang.String

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#version_column_name VertexAiFeatureGroupFeature#version_column_name}

---

### VertexAiFeatureGroupFeatureTimeouts <a name="VertexAiFeatureGroupFeatureTimeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeatureTimeouts;

VertexAiFeatureGroupFeatureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#create VertexAiFeatureGroupFeature#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#delete VertexAiFeatureGroupFeature#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#update VertexAiFeatureGroupFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#create VertexAiFeatureGroupFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#delete VertexAiFeatureGroupFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_feature_group_feature#update VertexAiFeatureGroupFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureGroupFeatureTimeoutsOutputReference <a name="VertexAiFeatureGroupFeatureTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_feature_group_feature.VertexAiFeatureGroupFeatureTimeoutsOutputReference;

new VertexAiFeatureGroupFeatureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>

---



