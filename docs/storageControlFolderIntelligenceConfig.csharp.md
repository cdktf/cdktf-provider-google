# `storageControlFolderIntelligenceConfig` Submodule <a name="`storageControlFolderIntelligenceConfig` Submodule" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageControlFolderIntelligenceConfig <a name="StorageControlFolderIntelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config google_storage_control_folder_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfig(Construct Scope, string Id, StorageControlFolderIntelligenceConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig">StorageControlFolderIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig">StorageControlFolderIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetEditionConfig">ResetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putFilter"></a>

```csharp
private void PutFilter(StorageControlFolderIntelligenceConfigFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageControlFolderIntelligenceConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a>

---

##### `ResetEditionConfig` <a name="ResetEditionConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetEditionConfig"></a>

```csharp
private void ResetEditionConfig()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageControlFolderIntelligenceConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageControlFolderIntelligenceConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageControlFolderIntelligenceConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageControlFolderIntelligenceConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageControlFolderIntelligenceConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageControlFolderIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageControlFolderIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig">EffectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference">StorageControlFolderIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference">StorageControlFolderIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.trialConfig">TrialConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList">StorageControlFolderIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfigInput">EditionConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfig">EditionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveIntelligenceConfig`<sup>Required</sup> <a name="EffectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```csharp
public StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList EffectiveIntelligenceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filter"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference">StorageControlFolderIntelligenceConfigFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeouts"></a>

```csharp
public StorageControlFolderIntelligenceConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference">StorageControlFolderIntelligenceConfigTimeoutsOutputReference</a>

---

##### `TrialConfig`<sup>Required</sup> <a name="TrialConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.trialConfig"></a>

```csharp
public StorageControlFolderIntelligenceConfigTrialConfigList TrialConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList">StorageControlFolderIntelligenceConfigTrialConfigList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EditionConfigInput`<sup>Optional</sup> <a name="EditionConfigInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfigInput"></a>

```csharp
public string EditionConfigInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filterInput"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EditionConfig`<sup>Required</sup> <a name="EditionConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfig"></a>

```csharp
public string EditionConfig { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageControlFolderIntelligenceConfigConfig <a name="StorageControlFolderIntelligenceConfigConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string EditionConfig = null,
    StorageControlFolderIntelligenceConfigFilter Filter = null,
    string Id = null,
    StorageControlFolderIntelligenceConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.name">Name</a></code> | <code>string</code> | Identifier of the GCP Folder. For GCP Folder, this field can be folder number. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.editionConfig">EditionConfig</a></code> | <code>string</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#id StorageControlFolderIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier of the GCP Folder. For GCP Folder, this field can be folder number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#name StorageControlFolderIntelligenceConfig#name}

---

##### `EditionConfig`<sup>Optional</sup> <a name="EditionConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.editionConfig"></a>

```csharp
public string EditionConfig { get; set; }
```

- *Type:* string

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#edition_config StorageControlFolderIntelligenceConfig#edition_config}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.filter"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#filter StorageControlFolderIntelligenceConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#id StorageControlFolderIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.timeouts"></a>

```csharp
public StorageControlFolderIntelligenceConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#timeouts StorageControlFolderIntelligenceConfig#timeouts}

---

### StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig <a name="StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig {

};
```


### StorageControlFolderIntelligenceConfigFilter <a name="StorageControlFolderIntelligenceConfigFilter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilter {
    StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets ExcludedCloudStorageBuckets = null,
    StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations ExcludedCloudStorageLocations = null,
    StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBuckets = null,
    StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations IncludedCloudStorageLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `ExcludedCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets ExcludedCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#excluded_cloud_storage_buckets StorageControlFolderIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `ExcludedCloudStorageLocations`<sup>Optional</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations ExcludedCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#excluded_cloud_storage_locations StorageControlFolderIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `IncludedCloudStorageBuckets`<sup>Optional</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#included_cloud_storage_buckets StorageControlFolderIntelligenceConfig#included_cloud_storage_buckets}

---

##### `IncludedCloudStorageLocations`<sup>Optional</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations IncludedCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#included_cloud_storage_locations StorageControlFolderIntelligenceConfig#included_cloud_storage_locations}

---

### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets {
    string[] BucketIdRegexes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; set; }
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#bucket_id_regexes StorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#locations StorageControlFolderIntelligenceConfig#locations}

---

### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets {
    string[] BucketIdRegexes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; set; }
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#bucket_id_regexes StorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#locations StorageControlFolderIntelligenceConfig#locations}

---

### StorageControlFolderIntelligenceConfigTimeouts <a name="StorageControlFolderIntelligenceConfigTimeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#create StorageControlFolderIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#delete StorageControlFolderIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#update StorageControlFolderIntelligenceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#create StorageControlFolderIntelligenceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#delete StorageControlFolderIntelligenceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#update StorageControlFolderIntelligenceConfig#update}.

---

### StorageControlFolderIntelligenceConfigTrialConfig <a name="StorageControlFolderIntelligenceConfigTrialConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigTrialConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList <a name="StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```csharp
private StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">EffectiveEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">IntelligenceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveEdition`<sup>Required</sup> <a name="EffectiveEdition" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```csharp
public string EffectiveEdition { get; }
```

- *Type:* string

---

##### `IntelligenceConfig`<sup>Required</sup> <a name="IntelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```csharp
public string IntelligenceConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```csharp
public StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```csharp
public string[] BucketIdRegexesInput { get; }
```

- *Type:* string[]

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```csharp
public string[] BucketIdRegexesInput { get; }
```

- *Type:* string[]

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### StorageControlFolderIntelligenceConfigFilterOutputReference <a name="StorageControlFolderIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">PutExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">PutExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">PutIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">PutIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">ResetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">ResetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">ResetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">ResetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedCloudStorageBuckets` <a name="PutExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```csharp
private void PutExcludedCloudStorageBuckets(StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `PutExcludedCloudStorageLocations` <a name="PutExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```csharp
private void PutExcludedCloudStorageLocations(StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `PutIncludedCloudStorageBuckets` <a name="PutIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```csharp
private void PutIncludedCloudStorageBuckets(StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `PutIncludedCloudStorageLocations` <a name="PutIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```csharp
private void PutIncludedCloudStorageLocations(StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `ResetExcludedCloudStorageBuckets` <a name="ResetExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```csharp
private void ResetExcludedCloudStorageBuckets()
```

##### `ResetExcludedCloudStorageLocations` <a name="ResetExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```csharp
private void ResetExcludedCloudStorageLocations()
```

##### `ResetIncludedCloudStorageBuckets` <a name="ResetIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```csharp
private void ResetIncludedCloudStorageBuckets()
```

##### `ResetIncludedCloudStorageLocations` <a name="ResetIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```csharp
private void ResetIncludedCloudStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">ExcludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">ExcludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">IncludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">IncludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedCloudStorageBuckets`<sup>Required</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference ExcludedCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `ExcludedCloudStorageLocations`<sup>Required</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference ExcludedCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference IncludedCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `IncludedCloudStorageLocations`<sup>Required</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference IncludedCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `ExcludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets ExcludedCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `ExcludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations ExcludedCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `IncludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `IncludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations IncludedCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```csharp
public StorageControlFolderIntelligenceConfigFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

---


### StorageControlFolderIntelligenceConfigTimeoutsOutputReference <a name="StorageControlFolderIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageControlFolderIntelligenceConfigTrialConfigList <a name="StorageControlFolderIntelligenceConfigTrialConfigList" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigTrialConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.get"></a>

```csharp
private StorageControlFolderIntelligenceConfigTrialConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageControlFolderIntelligenceConfigTrialConfigOutputReference <a name="StorageControlFolderIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageControlFolderIntelligenceConfigTrialConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig">StorageControlFolderIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```csharp
public StorageControlFolderIntelligenceConfigTrialConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig">StorageControlFolderIntelligenceConfigTrialConfig</a>

---



