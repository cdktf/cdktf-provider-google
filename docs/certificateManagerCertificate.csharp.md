# `certificateManagerCertificate` Submodule <a name="`certificateManagerCertificate` Submodule" id="@cdktf/provider-google.certificateManagerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificate <a name="CertificateManagerCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate google_certificate_manager_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificate(Construct Scope, string Id, CertificateManagerCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig">CertificateManagerCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig">CertificateManagerCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged">PutManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged">PutSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetSelfManaged">ResetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManaged` <a name="PutManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged"></a>

```csharp
private void PutManaged(CertificateManagerCertificateManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---

##### `PutSelfManaged` <a name="PutSelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged"></a>

```csharp
private void PutSelfManaged(CertificateManagerCertificateSelfManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(CertificateManagerCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetManaged"></a>

```csharp
private void ResetManaged()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSelfManaged` <a name="ResetSelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetSelfManaged"></a>

```csharp
private void ResetSelfManaged()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateManagerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CertificateManagerCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateManagerCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateManagerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managed">Managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference">CertificateManagerCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference">CertificateManagerCertificateSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference">CertificateManagerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managedInput">ManagedInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManagedInput">SelfManagedInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managed"></a>

```csharp
public CertificateManagerCertificateManagedOutputReference Managed { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference">CertificateManagerCertificateManagedOutputReference</a>

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManaged"></a>

```csharp
public CertificateManagerCertificateSelfManagedOutputReference SelfManaged { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference">CertificateManagerCertificateSelfManagedOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeouts"></a>

```csharp
public CertificateManagerCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference">CertificateManagerCertificateTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managedInput"></a>

```csharp
public CertificateManagerCertificateManaged ManagedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SelfManagedInput`<sup>Optional</sup> <a name="SelfManagedInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManagedInput"></a>

```csharp
public CertificateManagerCertificateSelfManaged SelfManagedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateConfig <a name="CertificateManagerCertificateConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    CertificateManagerCertificateManaged Managed = null,
    string Project = null,
    string Scope = null,
    CertificateManagerCertificateSelfManaged SelfManaged = null,
    CertificateManagerCertificateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.location">Location</a></code> | <code>string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.managed">Managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.scope">Scope</a></code> | <code>string</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#name CertificateManagerCertificate#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#description CertificateManagerCertificate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#labels CertificateManagerCertificate#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#location CertificateManagerCertificate#location}

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.managed"></a>

```csharp
public CertificateManagerCertificateManaged Managed { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#managed CertificateManagerCertificate#managed}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#scope CertificateManagerCertificate#scope}

---

##### `SelfManaged`<sup>Optional</sup> <a name="SelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.selfManaged"></a>

```csharp
public CertificateManagerCertificateSelfManaged SelfManaged { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#self_managed CertificateManagerCertificate#self_managed}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.timeouts"></a>

```csharp
public CertificateManagerCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#timeouts CertificateManagerCertificate#timeouts}

---

### CertificateManagerCertificateManaged <a name="CertificateManagerCertificateManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManaged {
    string[] DnsAuthorizations = null,
    string[] Domains = null,
    string IssuanceConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.dnsAuthorizations">DnsAuthorizations</a></code> | <code>string[]</code> | Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.domains">Domains</a></code> | <code>string[]</code> | The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.issuanceConfig">IssuanceConfig</a></code> | <code>string</code> | The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*. |

---

##### `DnsAuthorizations`<sup>Optional</sup> <a name="DnsAuthorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.dnsAuthorizations"></a>

```csharp
public string[] DnsAuthorizations { get; set; }
```

- *Type:* string[]

Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#dns_authorizations CertificateManagerCertificate#dns_authorizations}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#domains CertificateManagerCertificate#domains}

---

##### `IssuanceConfig`<sup>Optional</sup> <a name="IssuanceConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.issuanceConfig"></a>

```csharp
public string IssuanceConfig { get; set; }
```

- *Type:* string

The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*.

If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#issuance_config CertificateManagerCertificate#issuance_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### CertificateManagerCertificateManagedAuthorizationAttemptInfo <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfo" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManagedAuthorizationAttemptInfo {

};
```


### CertificateManagerCertificateManagedProvisioningIssue <a name="CertificateManagerCertificateManagedProvisioningIssue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManagedProvisioningIssue {

};
```


### CertificateManagerCertificateSelfManaged <a name="CertificateManagerCertificateSelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateSelfManaged {
    string CertificatePem = null,
    string PemCertificate = null,
    string PemPrivateKey = null,
    string PrivateKeyPem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.certificatePem">CertificatePem</a></code> | <code>string</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemPrivateKey">PemPrivateKey</a></code> | <code>string</code> | The private key of the leaf certificate in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | The private key of the leaf certificate in PEM-encoded form. |

---

##### `CertificatePem`<sup>Optional</sup> <a name="CertificatePem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.certificatePem"></a>

```csharp
public string CertificatePem { get; set; }
```

- *Type:* string

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#certificate_pem CertificateManagerCertificate#certificate_pem}

---

##### `PemCertificate`<sup>Optional</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; set; }
```

- *Type:* string

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#pem_certificate CertificateManagerCertificate#pem_certificate}

---

##### `PemPrivateKey`<sup>Optional</sup> <a name="PemPrivateKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemPrivateKey"></a>

```csharp
public string PemPrivateKey { get; set; }
```

- *Type:* string

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#pem_private_key CertificateManagerCertificate#pem_private_key}

---

##### `PrivateKeyPem`<sup>Optional</sup> <a name="PrivateKeyPem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; set; }
```

- *Type:* string

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#private_key_pem CertificateManagerCertificate#private_key_pem}

---

### CertificateManagerCertificateTimeouts <a name="CertificateManagerCertificateTimeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateManagedAuthorizationAttemptInfoList <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManagedAuthorizationAttemptInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get"></a>

```csharp
private CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo">CertificateManagerCertificateManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```csharp
public CertificateManagerCertificateManagedAuthorizationAttemptInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo">CertificateManagerCertificateManagedAuthorizationAttemptInfo</a>

---


### CertificateManagerCertificateManagedOutputReference <a name="CertificateManagerCertificateManagedOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations">ResetDnsAuthorizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetIssuanceConfig">ResetIssuanceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsAuthorizations` <a name="ResetDnsAuthorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations"></a>

```csharp
private void ResetDnsAuthorizations()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetIssuanceConfig` <a name="ResetIssuanceConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetIssuanceConfig"></a>

```csharp
private void ResetIssuanceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo">AuthorizationAttemptInfo</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList">CertificateManagerCertificateManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.provisioningIssue">ProvisioningIssue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList">CertificateManagerCertificateManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput">DnsAuthorizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput">IssuanceConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations">DnsAuthorizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfig">IssuanceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationAttemptInfo`<sup>Required</sup> <a name="AuthorizationAttemptInfo" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo"></a>

```csharp
public CertificateManagerCertificateManagedAuthorizationAttemptInfoList AuthorizationAttemptInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList">CertificateManagerCertificateManagedAuthorizationAttemptInfoList</a>

---

##### `ProvisioningIssue`<sup>Required</sup> <a name="ProvisioningIssue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.provisioningIssue"></a>

```csharp
public CertificateManagerCertificateManagedProvisioningIssueList ProvisioningIssue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList">CertificateManagerCertificateManagedProvisioningIssueList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DnsAuthorizationsInput`<sup>Optional</sup> <a name="DnsAuthorizationsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput"></a>

```csharp
public string[] DnsAuthorizationsInput { get; }
```

- *Type:* string[]

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `IssuanceConfigInput`<sup>Optional</sup> <a name="IssuanceConfigInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput"></a>

```csharp
public string IssuanceConfigInput { get; }
```

- *Type:* string

---

##### `DnsAuthorizations`<sup>Required</sup> <a name="DnsAuthorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations"></a>

```csharp
public string[] DnsAuthorizations { get; }
```

- *Type:* string[]

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `IssuanceConfig`<sup>Required</sup> <a name="IssuanceConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfig"></a>

```csharp
public string IssuanceConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.internalValue"></a>

```csharp
public CertificateManagerCertificateManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---


### CertificateManagerCertificateManagedProvisioningIssueList <a name="CertificateManagerCertificateManagedProvisioningIssueList" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManagedProvisioningIssueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get"></a>

```csharp
private CertificateManagerCertificateManagedProvisioningIssueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificateManagerCertificateManagedProvisioningIssueOutputReference <a name="CertificateManagerCertificateManagedProvisioningIssueOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateManagedProvisioningIssueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue">CertificateManagerCertificateManagedProvisioningIssue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue"></a>

```csharp
public CertificateManagerCertificateManagedProvisioningIssue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue">CertificateManagerCertificateManagedProvisioningIssue</a>

---


### CertificateManagerCertificateSelfManagedOutputReference <a name="CertificateManagerCertificateSelfManagedOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateSelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem">ResetCertificatePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate">ResetPemCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey">ResetPemPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem">ResetPrivateKeyPem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificatePem` <a name="ResetCertificatePem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem"></a>

```csharp
private void ResetCertificatePem()
```

##### `ResetPemCertificate` <a name="ResetPemCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate"></a>

```csharp
private void ResetPemCertificate()
```

##### `ResetPemPrivateKey` <a name="ResetPemPrivateKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey"></a>

```csharp
private void ResetPemPrivateKey()
```

##### `ResetPrivateKeyPem` <a name="ResetPrivateKeyPem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem"></a>

```csharp
private void ResetPrivateKeyPem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput">CertificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput">PemPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput">PrivateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePem">CertificatePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey">PemPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificatePemInput`<sup>Optional</sup> <a name="CertificatePemInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput"></a>

```csharp
public string CertificatePemInput { get; }
```

- *Type:* string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput"></a>

```csharp
public string PemCertificateInput { get; }
```

- *Type:* string

---

##### `PemPrivateKeyInput`<sup>Optional</sup> <a name="PemPrivateKeyInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput"></a>

```csharp
public string PemPrivateKeyInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPemInput`<sup>Optional</sup> <a name="PrivateKeyPemInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput"></a>

```csharp
public string PrivateKeyPemInput { get; }
```

- *Type:* string

---

##### `CertificatePem`<sup>Required</sup> <a name="CertificatePem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePem"></a>

```csharp
public string CertificatePem { get; }
```

- *Type:* string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; }
```

- *Type:* string

---

##### `PemPrivateKey`<sup>Required</sup> <a name="PemPrivateKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey"></a>

```csharp
public string PemPrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.internalValue"></a>

```csharp
public CertificateManagerCertificateSelfManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---


### CertificateManagerCertificateTimeoutsOutputReference <a name="CertificateManagerCertificateTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



