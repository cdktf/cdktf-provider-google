# `kmsCryptoKey` Submodule <a name="`kmsCryptoKey` Submodule" id="@cdktf/provider-google.kmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCryptoKey <a name="KmsCryptoKey" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKey(Construct Scope, string Id, KmsCryptoKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig">KmsCryptoKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig">KmsCryptoKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate">PutVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetDestroyScheduledDuration">ResetDestroyScheduledDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetImportOnly">ResetImportOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetSkipInitialVersionCreation">ResetSkipInitialVersionCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetVersionTemplate">ResetVersionTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts"></a>

```csharp
private void PutTimeouts(KmsCryptoKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

---

##### `PutVersionTemplate` <a name="PutVersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate"></a>

```csharp
private void PutVersionTemplate(KmsCryptoKeyVersionTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---

##### `ResetDestroyScheduledDuration` <a name="ResetDestroyScheduledDuration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetDestroyScheduledDuration"></a>

```csharp
private void ResetDestroyScheduledDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportOnly` <a name="ResetImportOnly" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetImportOnly"></a>

```csharp
private void ResetImportOnly()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetPurpose"></a>

```csharp
private void ResetPurpose()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetSkipInitialVersionCreation` <a name="ResetSkipInitialVersionCreation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetSkipInitialVersionCreation"></a>

```csharp
private void ResetSkipInitialVersionCreation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionTemplate` <a name="ResetVersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetVersionTemplate"></a>

```csharp
private void ResetVersionTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsCryptoKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KmsCryptoKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsCryptoKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsCryptoKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KmsCryptoKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList">KmsCryptoKeyPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference">KmsCryptoKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference">KmsCryptoKeyVersionTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDurationInput">DestroyScheduledDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnlyInput">ImportOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRingInput">KeyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreationInput">SkipInitialVersionCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplateInput">VersionTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnly">ImportOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRing">KeyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.primary"></a>

```csharp
public KmsCryptoKeyPrimaryList Primary { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList">KmsCryptoKeyPrimaryList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeouts"></a>

```csharp
public KmsCryptoKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference">KmsCryptoKeyTimeoutsOutputReference</a>

---

##### `VersionTemplate`<sup>Required</sup> <a name="VersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplate"></a>

```csharp
public KmsCryptoKeyVersionTemplateOutputReference VersionTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference">KmsCryptoKeyVersionTemplateOutputReference</a>

---

##### `DestroyScheduledDurationInput`<sup>Optional</sup> <a name="DestroyScheduledDurationInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDurationInput"></a>

```csharp
public string DestroyScheduledDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportOnlyInput`<sup>Optional</sup> <a name="ImportOnlyInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnlyInput"></a>

```csharp
public object ImportOnlyInput { get; }
```

- *Type:* object

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRingInput"></a>

```csharp
public string KeyRingInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriodInput"></a>

```csharp
public string RotationPeriodInput { get; }
```

- *Type:* string

---

##### `SkipInitialVersionCreationInput`<sup>Optional</sup> <a name="SkipInitialVersionCreationInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreationInput"></a>

```csharp
public object SkipInitialVersionCreationInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionTemplateInput`<sup>Optional</sup> <a name="VersionTemplateInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplateInput"></a>

```csharp
public KmsCryptoKeyVersionTemplate VersionTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---

##### `DestroyScheduledDuration`<sup>Required</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDuration"></a>

```csharp
public string DestroyScheduledDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportOnly`<sup>Required</sup> <a name="ImportOnly" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnly"></a>

```csharp
public object ImportOnly { get; }
```

- *Type:* object

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRing"></a>

```csharp
public string KeyRing { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `SkipInitialVersionCreation`<sup>Required</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreation"></a>

```csharp
public object SkipInitialVersionCreation { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCryptoKeyConfig <a name="KmsCryptoKeyConfig" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyRing,
    string Name,
    string DestroyScheduledDuration = null,
    string Id = null,
    object ImportOnly = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Purpose = null,
    string RotationPeriod = null,
    object SkipInitialVersionCreation = null,
    KmsCryptoKeyTimeouts Timeouts = null,
    KmsCryptoKeyVersionTemplate VersionTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.keyRing">KeyRing</a></code> | <code>string</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.name">Name</a></code> | <code>string</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>string</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.importOnly">ImportOnly</a></code> | <code>object</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.purpose">Purpose</a></code> | <code>string</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>object</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.keyRing"></a>

```csharp
public string KeyRing { get; set; }
```

- *Type:* string

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#key_ring KmsCryptoKey#key_ring}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#name KmsCryptoKey#name}

---

##### `DestroyScheduledDuration`<sup>Optional</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.destroyScheduledDuration"></a>

```csharp
public string DestroyScheduledDuration { get; set; }
```

- *Type:* string

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#destroy_scheduled_duration KmsCryptoKey#destroy_scheduled_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportOnly`<sup>Optional</sup> <a name="ImportOnly" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.importOnly"></a>

```csharp
public object ImportOnly { get; set; }
```

- *Type:* object

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#import_only KmsCryptoKey#import_only}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels with user-defined metadata to apply to this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#labels KmsCryptoKey#labels}

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#purpose KmsCryptoKey#purpose}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; set; }
```

- *Type:* string

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#rotation_period KmsCryptoKey#rotation_period}

---

##### `SkipInitialVersionCreation`<sup>Optional</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.skipInitialVersionCreation"></a>

```csharp
public object SkipInitialVersionCreation { get; set; }
```

- *Type:* object

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#skip_initial_version_creation KmsCryptoKey#skip_initial_version_creation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.timeouts"></a>

```csharp
public KmsCryptoKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#timeouts KmsCryptoKey#timeouts}

---

##### `VersionTemplate`<sup>Optional</sup> <a name="VersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.versionTemplate"></a>

```csharp
public KmsCryptoKeyVersionTemplate VersionTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#version_template KmsCryptoKey#version_template}

---

### KmsCryptoKeyPrimary <a name="KmsCryptoKeyPrimary" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyPrimary {

};
```


### KmsCryptoKeyTimeouts <a name="KmsCryptoKeyTimeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#create KmsCryptoKey#create}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#delete KmsCryptoKey#delete}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#update KmsCryptoKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#create KmsCryptoKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#delete KmsCryptoKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#update KmsCryptoKey#update}.

---

### KmsCryptoKeyVersionTemplate <a name="KmsCryptoKeyVersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyVersionTemplate {
    string Algorithm,
    string ProtectionLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.algorithm">Algorithm</a></code> | <code>string</code> | The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | The protection level to use when creating a version based on this template. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#algorithm KmsCryptoKey#algorithm}

---

##### `ProtectionLevel`<sup>Optional</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; set; }
```

- *Type:* string

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/kms_crypto_key#protection_level KmsCryptoKey#protection_level}

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCryptoKeyPrimaryList <a name="KmsCryptoKeyPrimaryList" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyPrimaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.get"></a>

```csharp
private KmsCryptoKeyPrimaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### KmsCryptoKeyPrimaryOutputReference <a name="KmsCryptoKeyPrimaryOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary">KmsCryptoKeyPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.internalValue"></a>

```csharp
public KmsCryptoKeyPrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary">KmsCryptoKeyPrimary</a>

---


### KmsCryptoKeyTimeoutsOutputReference <a name="KmsCryptoKeyTimeoutsOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KmsCryptoKeyVersionTemplateOutputReference <a name="KmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyVersionTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel">ResetProtectionLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtectionLevel` <a name="ResetProtectionLevel" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel"></a>

```csharp
private void ResetProtectionLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput">ProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `ProtectionLevelInput`<sup>Optional</sup> <a name="ProtectionLevelInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput"></a>

```csharp
public string ProtectionLevelInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```csharp
public KmsCryptoKeyVersionTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---



