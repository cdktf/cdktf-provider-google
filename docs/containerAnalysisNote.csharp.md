# `containerAnalysisNote` Submodule <a name="`containerAnalysisNote` Submodule" id="@cdktf/provider-google.containerAnalysisNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNote <a name="ContainerAnalysisNote" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note google_container_analysis_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNote(Construct Scope, string Id, ContainerAnalysisNoteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig">ContainerAnalysisNoteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig">ContainerAnalysisNoteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority">PutAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl">PutRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription">ResetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames">ResetRelatedNoteNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl">ResetRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription">ResetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestationAuthority` <a name="PutAttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority"></a>

```csharp
private void PutAttestationAuthority(ContainerAnalysisNoteAttestationAuthority Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---

##### `PutRelatedUrl` <a name="PutRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl"></a>

```csharp
private void PutRelatedUrl(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAnalysisNoteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

---

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime"></a>

```csharp
private void ResetExpirationTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLongDescription` <a name="ResetLongDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription"></a>

```csharp
private void ResetLongDescription()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRelatedNoteNames` <a name="ResetRelatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames"></a>

```csharp
private void ResetRelatedNoteNames()
```

##### `ResetRelatedUrl` <a name="ResetRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl"></a>

```csharp
private void ResetRelatedUrl()
```

##### `ResetShortDescription` <a name="ResetShortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription"></a>

```csharp
private void ResetShortDescription()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAnalysisNote resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNote.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNote.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNote.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNote.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAnalysisNote resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAnalysisNote to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAnalysisNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority">AttestationAuthority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl">RelatedUrl</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput">AttestationAuthorityInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput">LongDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput">RelatedNoteNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput">RelatedUrlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription">LongDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames">RelatedNoteNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription">ShortDescription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttestationAuthority`<sup>Required</sup> <a name="AttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthorityOutputReference AttestationAuthority { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `RelatedUrl`<sup>Required</sup> <a name="RelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl"></a>

```csharp
public ContainerAnalysisNoteRelatedUrlList RelatedUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts"></a>

```csharp
public ContainerAnalysisNoteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AttestationAuthorityInput`<sup>Optional</sup> <a name="AttestationAuthorityInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthority AttestationAuthorityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput"></a>

```csharp
public string ExpirationTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LongDescriptionInput`<sup>Optional</sup> <a name="LongDescriptionInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput"></a>

```csharp
public string LongDescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RelatedNoteNamesInput`<sup>Optional</sup> <a name="RelatedNoteNamesInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput"></a>

```csharp
public string[] RelatedNoteNamesInput { get; }
```

- *Type:* string[]

---

##### `RelatedUrlInput`<sup>Optional</sup> <a name="RelatedUrlInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput"></a>

```csharp
public object RelatedUrlInput { get; }
```

- *Type:* object

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput"></a>

```csharp
public string ShortDescriptionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription"></a>

```csharp
public string LongDescription { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RelatedNoteNames`<sup>Required</sup> <a name="RelatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames"></a>

```csharp
public string[] RelatedNoteNames { get; }
```

- *Type:* string[]

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription"></a>

```csharp
public string ShortDescription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteAttestationAuthority <a name="ContainerAnalysisNoteAttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteAttestationAuthority {
    ContainerAnalysisNoteAttestationAuthorityHint Hint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint">Hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | hint block. |

---

##### `Hint`<sup>Required</sup> <a name="Hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthorityHint Hint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#hint ContainerAnalysisNote#hint}

---

### ContainerAnalysisNoteAttestationAuthorityHint <a name="ContainerAnalysisNoteAttestationAuthorityHint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteAttestationAuthorityHint {
    string HumanReadableName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName">HumanReadableName</a></code> | <code>string</code> | The human readable name of this Attestation Authority, for example "qa". |

---

##### `HumanReadableName`<sup>Required</sup> <a name="HumanReadableName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName"></a>

```csharp
public string HumanReadableName { get; set; }
```

- *Type:* string

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#human_readable_name ContainerAnalysisNote#human_readable_name}

---

### ContainerAnalysisNoteConfig <a name="ContainerAnalysisNoteConfig" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ContainerAnalysisNoteAttestationAuthority AttestationAuthority,
    string Name,
    string ExpirationTime = null,
    string Id = null,
    string LongDescription = null,
    string Project = null,
    string[] RelatedNoteNames = null,
    object RelatedUrl = null,
    string ShortDescription = null,
    ContainerAnalysisNoteTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority">AttestationAuthority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name">Name</a></code> | <code>string</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription">LongDescription</a></code> | <code>string</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames">RelatedNoteNames</a></code> | <code>string[]</code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl">RelatedUrl</a></code> | <code>object</code> | related_url block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription">ShortDescription</a></code> | <code>string</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AttestationAuthority`<sup>Required</sup> <a name="AttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthority AttestationAuthority { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#attestation_authority ContainerAnalysisNote#attestation_authority}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#name ContainerAnalysisNote#name}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; set; }
```

- *Type:* string

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#expiration_time ContainerAnalysisNote#expiration_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LongDescription`<sup>Optional</sup> <a name="LongDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription"></a>

```csharp
public string LongDescription { get; set; }
```

- *Type:* string

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#long_description ContainerAnalysisNote#long_description}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}.

---

##### `RelatedNoteNames`<sup>Optional</sup> <a name="RelatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames"></a>

```csharp
public string[] RelatedNoteNames { get; set; }
```

- *Type:* string[]

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#related_note_names ContainerAnalysisNote#related_note_names}

---

##### `RelatedUrl`<sup>Optional</sup> <a name="RelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl"></a>

```csharp
public object RelatedUrl { get; set; }
```

- *Type:* object

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#related_url ContainerAnalysisNote#related_url}

---

##### `ShortDescription`<sup>Optional</sup> <a name="ShortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription"></a>

```csharp
public string ShortDescription { get; set; }
```

- *Type:* string

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#short_description ContainerAnalysisNote#short_description}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts"></a>

```csharp
public ContainerAnalysisNoteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#timeouts ContainerAnalysisNote#timeouts}

---

### ContainerAnalysisNoteRelatedUrl <a name="ContainerAnalysisNoteRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteRelatedUrl {
    string Url,
    string Label = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url">Url</a></code> | <code>string</code> | Specific URL associated with the resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label">Label</a></code> | <code>string</code> | Label to describe usage of the URL. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Specific URL associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#url ContainerAnalysisNote#url}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Label to describe usage of the URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#label ContainerAnalysisNote#label}

---

### ContainerAnalysisNoteTimeouts <a name="ContainerAnalysisNoteTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisNoteAttestationAuthorityHintOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityHintOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteAttestationAuthorityHintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput">HumanReadableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName">HumanReadableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HumanReadableNameInput`<sup>Optional</sup> <a name="HumanReadableNameInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput"></a>

```csharp
public string HumanReadableNameInput { get; }
```

- *Type:* string

---

##### `HumanReadableName`<sup>Required</sup> <a name="HumanReadableName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName"></a>

```csharp
public string HumanReadableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthorityHint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---


### ContainerAnalysisNoteAttestationAuthorityOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteAttestationAuthorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint">PutHint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHint` <a name="PutHint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint"></a>

```csharp
private void PutHint(ContainerAnalysisNoteAttestationAuthorityHint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint">Hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput">HintInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hint`<sup>Required</sup> <a name="Hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthorityHintOutputReference Hint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a>

---

##### `HintInput`<sup>Optional</sup> <a name="HintInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthorityHint HintInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue"></a>

```csharp
public ContainerAnalysisNoteAttestationAuthority InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---


### ContainerAnalysisNoteRelatedUrlList <a name="ContainerAnalysisNoteRelatedUrlList" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteRelatedUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get"></a>

```csharp
private ContainerAnalysisNoteRelatedUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAnalysisNoteRelatedUrlOutputReference <a name="ContainerAnalysisNoteRelatedUrlOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteRelatedUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAnalysisNoteTimeoutsOutputReference <a name="ContainerAnalysisNoteTimeoutsOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



