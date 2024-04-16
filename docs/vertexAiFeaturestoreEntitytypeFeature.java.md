# `vertexAiFeaturestoreEntitytypeFeature` Submodule <a name="`vertexAiFeaturestoreEntitytypeFeature` Submodule" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeaturestoreEntitytypeFeature <a name="VertexAiFeaturestoreEntitytypeFeature" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature google_vertex_ai_featurestore_entitytype_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeature;

VertexAiFeaturestoreEntitytypeFeature.Builder.create(Construct scope, java.lang.String id)
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
    .entitytype(java.lang.String)
    .valueType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .timeouts(VertexAiFeaturestoreEntitytypeFeatureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.entitytype">entitytype</a></code> | <code>java.lang.String</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#id VertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.entitytype"></a>

- *Type:* java.lang.String

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#entitytype VertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#value_type VertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#description VertexAiFeaturestoreEntitytypeFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#id VertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#labels VertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#name VertexAiFeaturestoreEntitytypeFeature#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#timeouts VertexAiFeaturestoreEntitytypeFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.putTimeouts"></a>

```java
public void putTimeouts(VertexAiFeaturestoreEntitytypeFeatureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiFeaturestoreEntitytypeFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeature;

VertexAiFeaturestoreEntitytypeFeature.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeature;

VertexAiFeaturestoreEntitytypeFeature.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeature;

VertexAiFeaturestoreEntitytypeFeature.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeature;

VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VertexAiFeaturestoreEntitytypeFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiFeaturestoreEntitytypeFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiFeaturestoreEntitytypeFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeaturestoreEntitytypeFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput">entitytypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytype">entitytype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeouts"></a>

```java
public VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entitytypeInput`<sup>Optional</sup> <a name="entitytypeInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput"></a>

```java
public java.lang.String getEntitytypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytype"></a>

```java
public java.lang.String getEntitytype();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeaturestoreEntitytypeFeatureConfig <a name="VertexAiFeaturestoreEntitytypeFeatureConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeatureConfig;

VertexAiFeaturestoreEntitytypeFeatureConfig.builder()
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
    .entitytype(java.lang.String)
    .valueType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .timeouts(VertexAiFeaturestoreEntitytypeFeatureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype">entitytype</a></code> | <code>java.lang.String</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#id VertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype"></a>

```java
public java.lang.String getEntitytype();
```

- *Type:* java.lang.String

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#entitytype VertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#value_type VertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#description VertexAiFeaturestoreEntitytypeFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#id VertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#labels VertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#name VertexAiFeaturestoreEntitytypeFeature#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts"></a>

```java
public VertexAiFeaturestoreEntitytypeFeatureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#timeouts VertexAiFeaturestoreEntitytypeFeature#timeouts}

---

### VertexAiFeaturestoreEntitytypeFeatureTimeouts <a name="VertexAiFeaturestoreEntitytypeFeatureTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeatureTimeouts;

VertexAiFeaturestoreEntitytypeFeatureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#create VertexAiFeaturestoreEntitytypeFeature#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#delete VertexAiFeaturestoreEntitytypeFeature#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#update VertexAiFeaturestoreEntitytypeFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#create VertexAiFeaturestoreEntitytypeFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#delete VertexAiFeaturestoreEntitytypeFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_featurestore_entitytype_feature#update VertexAiFeaturestoreEntitytypeFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference <a name="VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_featurestore_entitytype_feature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference;

new VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---



