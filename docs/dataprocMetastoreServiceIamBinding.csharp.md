# `dataprocMetastoreServiceIamBinding` Submodule <a name="`dataprocMetastoreServiceIamBinding` Submodule" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreServiceIamBinding <a name="DataprocMetastoreServiceIamBinding" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding google_dataproc_metastore_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocMetastoreServiceIamBinding(Construct Scope, string Id, DataprocMetastoreServiceIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig">DataprocMetastoreServiceIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig">DataprocMetastoreServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.putCondition"></a>

```csharp
private void PutCondition(DataprocMetastoreServiceIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition">DataprocMetastoreServiceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocMetastoreServiceIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocMetastoreServiceIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocMetastoreServiceIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocMetastoreServiceIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocMetastoreServiceIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataprocMetastoreServiceIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocMetastoreServiceIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocMetastoreServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataprocMetastoreServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference">DataprocMetastoreServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition">DataprocMetastoreServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.condition"></a>

```csharp
public DataprocMetastoreServiceIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference">DataprocMetastoreServiceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.conditionInput"></a>

```csharp
public DataprocMetastoreServiceIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition">DataprocMetastoreServiceIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreServiceIamBindingCondition <a name="DataprocMetastoreServiceIamBindingCondition" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocMetastoreServiceIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#expression DataprocMetastoreServiceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#title DataprocMetastoreServiceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#description DataprocMetastoreServiceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#expression DataprocMetastoreServiceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#title DataprocMetastoreServiceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#description DataprocMetastoreServiceIamBinding#description}.

---

### DataprocMetastoreServiceIamBindingConfig <a name="DataprocMetastoreServiceIamBindingConfig" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocMetastoreServiceIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Role,
    string ServiceId,
    DataprocMetastoreServiceIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#members DataprocMetastoreServiceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#role DataprocMetastoreServiceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#service_id DataprocMetastoreServiceIamBinding#service_id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition">DataprocMetastoreServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#id DataprocMetastoreServiceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#location DataprocMetastoreServiceIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#project DataprocMetastoreServiceIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#members DataprocMetastoreServiceIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#role DataprocMetastoreServiceIamBinding#role}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#service_id DataprocMetastoreServiceIamBinding#service_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.condition"></a>

```csharp
public DataprocMetastoreServiceIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition">DataprocMetastoreServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#condition DataprocMetastoreServiceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#id DataprocMetastoreServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#location DataprocMetastoreServiceIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/dataproc_metastore_service_iam_binding#project DataprocMetastoreServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreServiceIamBindingConditionOutputReference <a name="DataprocMetastoreServiceIamBindingConditionOutputReference" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocMetastoreServiceIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition">DataprocMetastoreServiceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public DataprocMetastoreServiceIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamBinding.DataprocMetastoreServiceIamBindingCondition">DataprocMetastoreServiceIamBindingCondition</a>

---



