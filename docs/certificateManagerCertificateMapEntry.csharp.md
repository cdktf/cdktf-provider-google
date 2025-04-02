# `certificateManagerCertificateMapEntry` Submodule <a name="`certificateManagerCertificateMapEntry` Submodule" id="@cdktf/provider-google.certificateManagerCertificateMapEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateMapEntry <a name="CertificateManagerCertificateMapEntry" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateMapEntry(Construct Scope, string Id, CertificateManagerCertificateMapEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig">CertificateManagerCertificateMapEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig">CertificateManagerCertificateMapEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts"></a>

```csharp
private void PutTimeouts(CertificateManagerCertificateMapEntryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher"></a>

```csharp
private void ResetMatcher()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateManagerCertificateMapEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificateMapEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificateMapEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificateMapEntry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificateMapEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CertificateManagerCertificateMapEntry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateManagerCertificateMapEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateManagerCertificateMapEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificateMapEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput">CertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput">MapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput">MatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates">Certificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map">Map</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher">Matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts"></a>

```csharp
public CertificateManagerCertificateMapEntryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput"></a>

```csharp
public string[] CertificatesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MapInput`<sup>Optional</sup> <a name="MapInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput"></a>

```csharp
public string MapInput { get; }
```

- *Type:* string

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput"></a>

```csharp
public string MatcherInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates"></a>

```csharp
public string[] Certificates { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Map`<sup>Required</sup> <a name="Map" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map"></a>

```csharp
public string Map { get; }
```

- *Type:* string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher"></a>

```csharp
public string Matcher { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateMapEntryConfig <a name="CertificateManagerCertificateMapEntryConfig" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateMapEntryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Certificates,
    string Map,
    string Name,
    string Description = null,
    string Hostname = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Matcher = null,
    string Project = null,
    CertificateManagerCertificateMapEntryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates">Certificates</a></code> | <code>string[]</code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map">Map</a></code> | <code>string</code> | A map entry that is inputted into the cetrificate map. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname">Hostname</a></code> | <code>string</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher">Matcher</a></code> | <code>string</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates"></a>

```csharp
public string[] Certificates { get; set; }
```

- *Type:* string[]

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/* /locations/* /certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#certificates CertificateManagerCertificateMapEntry#certificates}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Map`<sup>Required</sup> <a name="Map" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map"></a>

```csharp
public string Map { get; set; }
```

- *Type:* string

A map entry that is inputted into the cetrificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#map CertificateManagerCertificateMapEntry#map}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the Certificate Map Entry.

Certificate Map Entry
names must be unique globally and match pattern
'projects/* /locations/* /certificateMaps/* /certificateMapEntries/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#name CertificateManagerCertificateMapEntry#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#description CertificateManagerCertificateMapEntry#description}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#hostname CertificateManagerCertificateMapEntry#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#labels CertificateManagerCertificateMapEntry#labels}

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher"></a>

```csharp
public string Matcher { get; set; }
```

- *Type:* string

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#matcher CertificateManagerCertificateMapEntry#matcher}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts"></a>

```csharp
public CertificateManagerCertificateMapEntryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#timeouts CertificateManagerCertificateMapEntry#timeouts}

---

### CertificateManagerCertificateMapEntryTimeouts <a name="CertificateManagerCertificateMapEntryTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateMapEntryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateMapEntryTimeoutsOutputReference <a name="CertificateManagerCertificateMapEntryTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateMapEntryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



