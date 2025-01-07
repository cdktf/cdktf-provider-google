# `certificateManagerTrustConfig` Submodule <a name="`certificateManagerTrustConfig` Submodule" id="@cdktf/provider-google.certificateManagerTrustConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerTrustConfig <a name="CertificateManagerTrustConfig" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfig(Construct Scope, string Id, CertificateManagerTrustConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig">CertificateManagerTrustConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig">CertificateManagerTrustConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates">PutAllowlistedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores">PutTrustStores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetAllowlistedCertificates">ResetAllowlistedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores">ResetTrustStores</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowlistedCertificates` <a name="PutAllowlistedCertificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates"></a>

```csharp
private void PutAllowlistedCertificates(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(CertificateManagerTrustConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

---

##### `PutTrustStores` <a name="PutTrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores"></a>

```csharp
private void PutTrustStores(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowlistedCertificates` <a name="ResetAllowlistedCertificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetAllowlistedCertificates"></a>

```csharp
private void ResetAllowlistedCertificates()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrustStores` <a name="ResetTrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores"></a>

```csharp
private void ResetTrustStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerTrustConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerTrustConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerTrustConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerTrustConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateManagerTrustConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateManagerTrustConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerTrustConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificates">AllowlistedCertificates</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList">CertificateManagerTrustConfigAllowlistedCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores">TrustStores</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificatesInput">AllowlistedCertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput">TrustStoresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowlistedCertificates`<sup>Required</sup> <a name="AllowlistedCertificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificates"></a>

```csharp
public CertificateManagerTrustConfigAllowlistedCertificatesList AllowlistedCertificates { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList">CertificateManagerTrustConfigAllowlistedCertificatesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts"></a>

```csharp
public CertificateManagerTrustConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a>

---

##### `TrustStores`<sup>Required</sup> <a name="TrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores"></a>

```csharp
public CertificateManagerTrustConfigTrustStoresList TrustStores { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowlistedCertificatesInput`<sup>Optional</sup> <a name="AllowlistedCertificatesInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificatesInput"></a>

```csharp
public object AllowlistedCertificatesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrustStoresInput`<sup>Optional</sup> <a name="TrustStoresInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput"></a>

```csharp
public object TrustStoresInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerTrustConfigAllowlistedCertificates <a name="CertificateManagerTrustConfigAllowlistedCertificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigAllowlistedCertificates {
    string PemCertificate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | PEM certificate that is allowlisted. |

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; set; }
```

- *Type:* string

PEM certificate that is allowlisted.

The certificate can be up to 5k bytes, and must be a parseable X.509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

### CertificateManagerTrustConfigConfig <a name="CertificateManagerTrustConfigConfig" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    object AllowlistedCertificates = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    CertificateManagerTrustConfigTimeouts Timeouts = null,
    object TrustStores = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location">Location</a></code> | <code>string</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.allowlistedCertificates">AllowlistedCertificates</a></code> | <code>object</code> | allowlisted_certificates block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description">Description</a></code> | <code>string</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores">TrustStores</a></code> | <code>object</code> | trust_stores block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}

---

##### `AllowlistedCertificates`<sup>Optional</sup> <a name="AllowlistedCertificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.allowlistedCertificates"></a>

```csharp
public object AllowlistedCertificates { get; set; }
```

- *Type:* object

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#allowlisted_certificates CertificateManagerTrustConfig#allowlisted_certificates}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts"></a>

```csharp
public CertificateManagerTrustConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}

---

##### `TrustStores`<sup>Optional</sup> <a name="TrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores"></a>

```csharp
public object TrustStores { get; set; }
```

- *Type:* object

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}

---

### CertificateManagerTrustConfigTimeouts <a name="CertificateManagerTrustConfigTimeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}.

---

### CertificateManagerTrustConfigTrustStores <a name="CertificateManagerTrustConfigTrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStores {
    object IntermediateCas = null,
    object TrustAnchors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas">IntermediateCas</a></code> | <code>object</code> | intermediate_cas block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors">TrustAnchors</a></code> | <code>object</code> | trust_anchors block. |

---

##### `IntermediateCas`<sup>Optional</sup> <a name="IntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas"></a>

```csharp
public object IntermediateCas { get; set; }
```

- *Type:* object

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#intermediate_cas CertificateManagerTrustConfig#intermediate_cas}

---

##### `TrustAnchors`<sup>Optional</sup> <a name="TrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors"></a>

```csharp
public object TrustAnchors { get; set; }
```

- *Type:* object

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#trust_anchors CertificateManagerTrustConfig#trust_anchors}

---

### CertificateManagerTrustConfigTrustStoresIntermediateCas <a name="CertificateManagerTrustConfigTrustStoresIntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresIntermediateCas {
    string PemCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | PEM intermediate certificate used for building up paths for validation. |

---

##### `PemCertificate`<sup>Optional</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; set; }
```

- *Type:* string

PEM intermediate certificate used for building up paths for validation.

Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

### CertificateManagerTrustConfigTrustStoresTrustAnchors <a name="CertificateManagerTrustConfigTrustStoresTrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresTrustAnchors {
    string PemCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. |

---

##### `PemCertificate`<sup>Optional</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; set; }
```

- *Type:* string

PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerTrustConfigAllowlistedCertificatesList <a name="CertificateManagerTrustConfigAllowlistedCertificatesList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigAllowlistedCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get"></a>

```csharp
private CertificateManagerTrustConfigAllowlistedCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigAllowlistedCertificatesOutputReference <a name="CertificateManagerTrustConfigAllowlistedCertificatesOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigAllowlistedCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput"></a>

```csharp
public string PemCertificateInput { get; }
```

- *Type:* string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigTimeoutsOutputReference <a name="CertificateManagerTrustConfigTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasList <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresIntermediateCasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get"></a>

```csharp
private CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate">ResetPemCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPemCertificate` <a name="ResetPemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate"></a>

```csharp
private void ResetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput"></a>

```csharp
public string PemCertificateInput { get; }
```

- *Type:* string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigTrustStoresList <a name="CertificateManagerTrustConfigTrustStoresList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get"></a>

```csharp
private CertificateManagerTrustConfigTrustStoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigTrustStoresOutputReference <a name="CertificateManagerTrustConfigTrustStoresOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas">PutIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors">PutTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas">ResetIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors">ResetTrustAnchors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntermediateCas` <a name="PutIntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas"></a>

```csharp
private void PutIntermediateCas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* object

---

##### `PutTrustAnchors` <a name="PutTrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors"></a>

```csharp
private void PutTrustAnchors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* object

---

##### `ResetIntermediateCas` <a name="ResetIntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas"></a>

```csharp
private void ResetIntermediateCas()
```

##### `ResetTrustAnchors` <a name="ResetTrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors"></a>

```csharp
private void ResetTrustAnchors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas">IntermediateCas</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors">TrustAnchors</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput">IntermediateCasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput">TrustAnchorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntermediateCas`<sup>Required</sup> <a name="IntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas"></a>

```csharp
public CertificateManagerTrustConfigTrustStoresIntermediateCasList IntermediateCas { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a>

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors"></a>

```csharp
public CertificateManagerTrustConfigTrustStoresTrustAnchorsList TrustAnchors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a>

---

##### `IntermediateCasInput`<sup>Optional</sup> <a name="IntermediateCasInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput"></a>

```csharp
public object IntermediateCasInput { get; }
```

- *Type:* object

---

##### `TrustAnchorsInput`<sup>Optional</sup> <a name="TrustAnchorsInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput"></a>

```csharp
public object TrustAnchorsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsList <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresTrustAnchorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get"></a>

```csharp
private CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate">ResetPemCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPemCertificate` <a name="ResetPemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate"></a>

```csharp
private void ResetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```csharp
public string PemCertificateInput { get; }
```

- *Type:* string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



