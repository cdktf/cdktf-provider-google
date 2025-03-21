# `vertexAiFeatureOnlineStoreFeatureview` Submodule <a name="`vertexAiFeatureOnlineStoreFeatureview` Submodule" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureOnlineStoreFeatureview <a name="VertexAiFeatureOnlineStoreFeatureview" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureview(Construct Scope, string Id, VertexAiFeatureOnlineStoreFeatureviewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig">VertexAiFeatureOnlineStoreFeatureviewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig">VertexAiFeatureOnlineStoreFeatureviewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource">PutBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource">PutFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig">PutSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource">ResetBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource">ResetFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetSyncConfig">ResetSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigQuerySource` <a name="PutBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource"></a>

```csharp
private void PutBigQuerySource(VertexAiFeatureOnlineStoreFeatureviewBigQuerySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `PutFeatureRegistrySource` <a name="PutFeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource"></a>

```csharp
private void PutFeatureRegistrySource(VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `PutSyncConfig` <a name="PutSyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig"></a>

```csharp
private void PutSyncConfig(VertexAiFeatureOnlineStoreFeatureviewSyncConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiFeatureOnlineStoreFeatureviewTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---

##### `ResetBigQuerySource` <a name="ResetBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource"></a>

```csharp
private void ResetBigQuerySource()
```

##### `ResetFeatureRegistrySource` <a name="ResetFeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource"></a>

```csharp
private void ResetFeatureRegistrySource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSyncConfig` <a name="ResetSyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetSyncConfig"></a>

```csharp
private void ResetSyncConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureOnlineStoreFeatureview.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureOnlineStoreFeatureview.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureOnlineStoreFeatureview.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureOnlineStoreFeatureview.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiFeatureOnlineStoreFeatureview to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiFeatureOnlineStoreFeatureview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureOnlineStoreFeatureview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource">BigQuerySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource">FeatureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput">BigQuerySourceInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput">FeatureOnlineStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput">FeatureRegistrySourceInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput">SyncConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigQuerySource`<sup>Required</sup> <a name="BigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference BigQuerySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FeatureRegistrySource`<sup>Required</sup> <a name="FeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference FeatureRegistrySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a>

---

##### `SyncConfig`<sup>Required</sup> <a name="SyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfig"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference SyncConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeouts"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BigQuerySourceInput`<sup>Optional</sup> <a name="BigQuerySourceInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewBigQuerySource BigQuerySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `FeatureOnlineStoreInput`<sup>Optional</sup> <a name="FeatureOnlineStoreInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput"></a>

```csharp
public string FeatureOnlineStoreInput { get; }
```

- *Type:* string

---

##### `FeatureRegistrySourceInput`<sup>Optional</sup> <a name="FeatureRegistrySourceInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource FeatureRegistrySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SyncConfigInput`<sup>Optional</sup> <a name="SyncConfigInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewSyncConfig SyncConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore"></a>

```csharp
public string FeatureOnlineStore { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureOnlineStoreFeatureviewBigQuerySource <a name="VertexAiFeatureOnlineStoreFeatureviewBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewBigQuerySource {
    string[] EntityIdColumns,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns">EntityIdColumns</a></code> | <code>string[]</code> | Columns to construct entityId / row keys. Start by supporting 1 only. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri">Uri</a></code> | <code>string</code> | The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig. |

---

##### `EntityIdColumns`<sup>Required</sup> <a name="EntityIdColumns" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns"></a>

```csharp
public string[] EntityIdColumns { get; set; }
```

- *Type:* string[]

Columns to construct entityId / row keys. Start by supporting 1 only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#entity_id_columns VertexAiFeatureOnlineStoreFeatureview#entity_id_columns}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#uri VertexAiFeatureOnlineStoreFeatureview#uri}

---

### VertexAiFeatureOnlineStoreFeatureviewConfig <a name="VertexAiFeatureOnlineStoreFeatureviewConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FeatureOnlineStore,
    string Region,
    VertexAiFeatureOnlineStoreFeatureviewBigQuerySource BigQuerySource = null,
    VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource FeatureRegistrySource = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Project = null,
    VertexAiFeatureOnlineStoreFeatureviewSyncConfig SyncConfig = null,
    VertexAiFeatureOnlineStoreFeatureviewTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>string</code> | The name of the FeatureOnlineStore to use for the featureview. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.region">Region</a></code> | <code>string</code> | The region for the resource. It should be the same as the featureonlinestore region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource">BigQuerySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource">FeatureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | feature_registry_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to this FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.name">Name</a></code> | <code>string</code> | Name of the FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | sync_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore"></a>

```csharp
public string FeatureOnlineStore { get; set; }
```

- *Type:* string

The name of the FeatureOnlineStore to use for the featureview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_online_store VertexAiFeatureOnlineStoreFeatureview#feature_online_store}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region for the resource. It should be the same as the featureonlinestore region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#region VertexAiFeatureOnlineStoreFeatureview#region}

---

##### `BigQuerySource`<sup>Optional</sup> <a name="BigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewBigQuerySource BigQuerySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#big_query_source VertexAiFeatureOnlineStoreFeatureview#big_query_source}

---

##### `FeatureRegistrySource`<sup>Optional</sup> <a name="FeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource FeatureRegistrySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

feature_registry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_registry_source VertexAiFeatureOnlineStoreFeatureview#feature_registry_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to this FeatureView.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#labels VertexAiFeatureOnlineStoreFeatureview#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the FeatureView.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#name VertexAiFeatureOnlineStoreFeatureview#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}.

---

##### `SyncConfig`<sup>Optional</sup> <a name="SyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewSyncConfig SyncConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#sync_config VertexAiFeatureOnlineStoreFeatureview#sync_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#timeouts VertexAiFeatureOnlineStoreFeatureview#timeouts}

---

### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource {
    object FeatureGroups,
    string ProjectNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups">FeatureGroups</a></code> | <code>object</code> | feature_groups block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | The project number of the parent project of the feature Groups. |

---

##### `FeatureGroups`<sup>Required</sup> <a name="FeatureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups"></a>

```csharp
public object FeatureGroups { get; set; }
```

- *Type:* object

feature_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_groups VertexAiFeatureOnlineStoreFeatureview#feature_groups}

---

##### `ProjectNumber`<sup>Optional</sup> <a name="ProjectNumber" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; set; }
```

- *Type:* string

The project number of the parent project of the feature Groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#project_number VertexAiFeatureOnlineStoreFeatureview#project_number}

---

### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups {
    string FeatureGroupId,
    string[] FeatureIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId">FeatureGroupId</a></code> | <code>string</code> | Identifier of the feature group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds">FeatureIds</a></code> | <code>string[]</code> | Identifiers of features under the feature group. |

---

##### `FeatureGroupId`<sup>Required</sup> <a name="FeatureGroupId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId"></a>

```csharp
public string FeatureGroupId { get; set; }
```

- *Type:* string

Identifier of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_group_id VertexAiFeatureOnlineStoreFeatureview#feature_group_id}

---

##### `FeatureIds`<sup>Required</sup> <a name="FeatureIds" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds"></a>

```csharp
public string[] FeatureIds { get; set; }
```

- *Type:* string[]

Identifiers of features under the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_ids VertexAiFeatureOnlineStoreFeatureview#feature_ids}

---

### VertexAiFeatureOnlineStoreFeatureviewSyncConfig <a name="VertexAiFeatureOnlineStoreFeatureviewSyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewSyncConfig {
    string Cron = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron">Cron</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". |

---

##### `Cron`<sup>Optional</sup> <a name="Cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron"></a>

```csharp
public string Cron { get; set; }
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#cron VertexAiFeatureOnlineStoreFeatureview#cron}

---

### VertexAiFeatureOnlineStoreFeatureviewTimeouts <a name="VertexAiFeatureOnlineStoreFeatureviewTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput">EntityIdColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns">EntityIdColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityIdColumnsInput`<sup>Optional</sup> <a name="EntityIdColumnsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput"></a>

```csharp
public string[] EntityIdColumnsInput { get; }
```

- *Type:* string[]

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `EntityIdColumns`<sup>Required</sup> <a name="EntityIdColumns" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns"></a>

```csharp
public string[] EntityIdColumns { get; }
```

- *Type:* string[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewBigQuerySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get"></a>

```csharp
private VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput">FeatureGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput">FeatureIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId">FeatureGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds">FeatureIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureGroupIdInput`<sup>Optional</sup> <a name="FeatureGroupIdInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput"></a>

```csharp
public string FeatureGroupIdInput { get; }
```

- *Type:* string

---

##### `FeatureIdsInput`<sup>Optional</sup> <a name="FeatureIdsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput"></a>

```csharp
public string[] FeatureIdsInput { get; }
```

- *Type:* string[]

---

##### `FeatureGroupId`<sup>Required</sup> <a name="FeatureGroupId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId"></a>

```csharp
public string FeatureGroupId { get; }
```

- *Type:* string

---

##### `FeatureIds`<sup>Required</sup> <a name="FeatureIds" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds"></a>

```csharp
public string[] FeatureIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups">PutFeatureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber">ResetProjectNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatureGroups` <a name="PutFeatureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups"></a>

```csharp
private void PutFeatureGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups.parameter.value"></a>

- *Type:* object

---

##### `ResetProjectNumber` <a name="ResetProjectNumber" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber"></a>

```csharp
private void ResetProjectNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups">FeatureGroups</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput">FeatureGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput">ProjectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureGroups`<sup>Required</sup> <a name="FeatureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList FeatureGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a>

---

##### `FeatureGroupsInput`<sup>Optional</sup> <a name="FeatureGroupsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput"></a>

```csharp
public object FeatureGroupsInput { get; }
```

- *Type:* object

---

##### `ProjectNumberInput`<sup>Optional</sup> <a name="ProjectNumberInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput"></a>

```csharp
public string ProjectNumberInput { get; }
```

- *Type:* string

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---


### VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron">ResetCron</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCron` <a name="ResetCron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron"></a>

```csharp
private void ResetCron()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput">CronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron">Cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput"></a>

```csharp
public string CronInput { get; }
```

- *Type:* string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron"></a>

```csharp
public string Cron { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreFeatureviewSyncConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---


### VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



