# `certificateManagerDnsAuthorization` Submodule <a name="`certificateManagerDnsAuthorization` Submodule" id="@cdktf/provider-google.certificateManagerDnsAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerDnsAuthorization <a name="CertificateManagerDnsAuthorization" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization google_certificate_manager_dns_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerDnsAuthorization(Construct Scope, string Id, CertificateManagerDnsAuthorizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig">CertificateManagerDnsAuthorizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig">CertificateManagerDnsAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts"></a>

```csharp
private void PutTimeouts(CertificateManagerDnsAuthorizationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateManagerDnsAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerDnsAuthorization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerDnsAuthorization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerDnsAuthorization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerDnsAuthorization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CertificateManagerDnsAuthorization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateManagerDnsAuthorization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateManagerDnsAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerDnsAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord">DnsResourceRecord</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DnsResourceRecord`<sup>Required</sup> <a name="DnsResourceRecord" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord"></a>

```csharp
public CertificateManagerDnsAuthorizationDnsResourceRecordList DnsResourceRecord { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts"></a>

```csharp
public CertificateManagerDnsAuthorizationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerDnsAuthorizationConfig <a name="CertificateManagerDnsAuthorizationConfig" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerDnsAuthorizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    CertificateManagerDnsAuthorizationTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain">Domain</a></code> | <code>string</code> | A domain which is being authorized. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the DNS Authorization resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.location">Location</a></code> | <code>string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.type">Type</a></code> | <code>string</code> | type of DNS authorization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#domain CertificateManagerDnsAuthorization#domain}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#name CertificateManagerDnsAuthorization#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#description CertificateManagerDnsAuthorization#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the DNS Authorization resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#labels CertificateManagerDnsAuthorization#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#location CertificateManagerDnsAuthorization#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts"></a>

```csharp
public CertificateManagerDnsAuthorizationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#timeouts CertificateManagerDnsAuthorization#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type of DNS authorization.

If unset during the resource creation, FIXED_RECORD will
be used for global resources, and PER_PROJECT_RECORD will be used for other locations.

FIXED_RECORD DNS authorization uses DNS-01 validation method

PER_PROJECT_RECORD DNS authorization allows for independent management
of Google-managed certificates with DNS authorization across multiple
projects. Possible values: ["FIXED_RECORD", "PER_PROJECT_RECORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#type CertificateManagerDnsAuthorization#type}

---

### CertificateManagerDnsAuthorizationDnsResourceRecord <a name="CertificateManagerDnsAuthorizationDnsResourceRecord" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerDnsAuthorizationDnsResourceRecord {

};
```


### CertificateManagerDnsAuthorizationTimeouts <a name="CertificateManagerDnsAuthorizationTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerDnsAuthorizationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerDnsAuthorizationDnsResourceRecordList <a name="CertificateManagerDnsAuthorizationDnsResourceRecordList" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerDnsAuthorizationDnsResourceRecordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get"></a>

```csharp
private CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference <a name="CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue"></a>

```csharp
public CertificateManagerDnsAuthorizationDnsResourceRecord InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a>

---


### CertificateManagerDnsAuthorizationTimeoutsOutputReference <a name="CertificateManagerDnsAuthorizationTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerDnsAuthorizationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



