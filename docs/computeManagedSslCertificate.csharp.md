# `computeManagedSslCertificate` Submodule <a name="`computeManagedSslCertificate` Submodule" id="@cdktf/provider-google.computeManagedSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeManagedSslCertificate <a name="ComputeManagedSslCertificate" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate google_compute_managed_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeManagedSslCertificate(Construct Scope, string Id, ComputeManagedSslCertificateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig">ComputeManagedSslCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig">ComputeManagedSslCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged">PutManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManaged` <a name="PutManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged"></a>

```csharp
private void PutManaged(ComputeManagedSslCertificateManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeManagedSslCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetManaged"></a>

```csharp
private void ResetManaged()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeManagedSslCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeManagedSslCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeManagedSslCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeManagedSslCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeManagedSslCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeManagedSslCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeManagedSslCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeManagedSslCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeManagedSslCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateId">CertificateId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managed">Managed</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference">ComputeManagedSslCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference">ComputeManagedSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managedInput">ManagedInput</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateId"></a>

```csharp
public double CertificateId { get; }
```

- *Type:* double

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managed"></a>

```csharp
public ComputeManagedSslCertificateManagedOutputReference Managed { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference">ComputeManagedSslCertificateManagedOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeouts"></a>

```csharp
public ComputeManagedSslCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference">ComputeManagedSslCertificateTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managedInput"></a>

```csharp
public ComputeManagedSslCertificateManaged ManagedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeManagedSslCertificateConfig <a name="ComputeManagedSslCertificateConfig" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeManagedSslCertificateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description = null,
    string Id = null,
    ComputeManagedSslCertificateManaged Managed = null,
    string Name = null,
    string Project = null,
    ComputeManagedSslCertificateTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.managed">Managed</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.type">Type</a></code> | <code>string</code> | Enum field whose value is always 'MANAGED' - used to signal to the API which type this is. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#description ComputeManagedSslCertificate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.managed"></a>

```csharp
public ComputeManagedSslCertificateManaged Managed { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#managed ComputeManagedSslCertificate#managed}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#name ComputeManagedSslCertificate#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.timeouts"></a>

```csharp
public ComputeManagedSslCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#timeouts ComputeManagedSslCertificate#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Enum field whose value is always 'MANAGED' - used to signal to the API which type this is.

Default value: "MANAGED" Possible values: ["MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#type ComputeManagedSslCertificate#type}

---

### ComputeManagedSslCertificateManaged <a name="ComputeManagedSslCertificateManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeManagedSslCertificateManaged {
    string[] Domains
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.property.domains">Domains</a></code> | <code>string[]</code> | Domains for which a managed SSL certificate will be valid. |

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

Domains for which a managed SSL certificate will be valid.

Currently,
there can be up to 100 domains in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#domains ComputeManagedSslCertificate#domains}

---

### ComputeManagedSslCertificateTimeouts <a name="ComputeManagedSslCertificateTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeManagedSslCertificateTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#create ComputeManagedSslCertificate#create}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#delete ComputeManagedSslCertificate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#create ComputeManagedSslCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_managed_ssl_certificate#delete ComputeManagedSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeManagedSslCertificateManagedOutputReference <a name="ComputeManagedSslCertificateManagedOutputReference" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeManagedSslCertificateManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.internalValue"></a>

```csharp
public ComputeManagedSslCertificateManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---


### ComputeManagedSslCertificateTimeoutsOutputReference <a name="ComputeManagedSslCertificateTimeoutsOutputReference" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeManagedSslCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



