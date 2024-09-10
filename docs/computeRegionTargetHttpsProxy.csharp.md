# `computeRegionTargetHttpsProxy` Submodule <a name="`computeRegionTargetHttpsProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetHttpsProxy <a name="ComputeRegionTargetHttpsProxy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy google_compute_region_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetHttpsProxy(Construct Scope, string Id, ComputeRegionTargetHttpsProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig">ComputeRegionTargetHttpsProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig">ComputeRegionTargetHttpsProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetCertificateManagerCertificates">ResetCertificateManagerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetServerTlsPolicy">ResetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslCertificates">ResetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionTargetHttpsProxyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

---

##### `ResetCertificateManagerCertificates` <a name="ResetCertificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```csharp
private void ResetCertificateManagerCertificates()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServerTlsPolicy` <a name="ResetServerTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetServerTlsPolicy"></a>

```csharp
private void ResetServerTlsPolicy()
```

##### `ResetSslCertificates` <a name="ResetSslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslCertificates"></a>

```csharp
private void ResetSslCertificates()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslPolicy"></a>

```csharp
private void ResetSslPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionTargetHttpsProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetHttpsProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetHttpsProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetHttpsProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetHttpsProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRegionTargetHttpsProxy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionTargetHttpsProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId">ProxyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificatesInput">CertificateManagerCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicyInput">ServerTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput">SslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicyInput">SslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput">UrlMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificates">CertificateManagerCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates">SslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicy">SslPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap">UrlMap</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId"></a>

```csharp
public double ProxyId { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts"></a>

```csharp
public ComputeRegionTargetHttpsProxyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `CertificateManagerCertificatesInput`<sup>Optional</sup> <a name="CertificateManagerCertificatesInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```csharp
public string[] CertificateManagerCertificatesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerTlsPolicyInput`<sup>Optional</sup> <a name="ServerTlsPolicyInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```csharp
public string ServerTlsPolicyInput { get; }
```

- *Type:* string

---

##### `SslCertificatesInput`<sup>Optional</sup> <a name="SslCertificatesInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput"></a>

```csharp
public string[] SslCertificatesInput { get; }
```

- *Type:* string[]

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicyInput"></a>

```csharp
public string SslPolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlMapInput`<sup>Optional</sup> <a name="UrlMapInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput"></a>

```csharp
public string UrlMapInput { get; }
```

- *Type:* string

---

##### `CertificateManagerCertificates`<sup>Required</sup> <a name="CertificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificates"></a>

```csharp
public string[] CertificateManagerCertificates { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; }
```

- *Type:* string

---

##### `SslCertificates`<sup>Required</sup> <a name="SslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates"></a>

```csharp
public string[] SslCertificates { get; }
```

- *Type:* string[]

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicy"></a>

```csharp
public string SslPolicy { get; }
```

- *Type:* string

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap"></a>

```csharp
public string UrlMap { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetHttpsProxyConfig <a name="ComputeRegionTargetHttpsProxyConfig" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetHttpsProxyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string UrlMap,
    string[] CertificateManagerCertificates = null,
    string Description = null,
    string Id = null,
    string Project = null,
    string Region = null,
    string ServerTlsPolicy = null,
    string[] SslCertificates = null,
    string SslPolicy = null,
    ComputeRegionTargetHttpsProxyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap">UrlMap</a></code> | <code>string</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.certificateManagerCertificates">CertificateManagerCertificates</a></code> | <code>string[]</code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates">SslCertificates</a></code> | <code>string[]</code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslPolicy">SslPolicy</a></code> | <code>string</code> | A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#name ComputeRegionTargetHttpsProxy#name}

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap"></a>

```csharp
public string UrlMap { get; set; }
```

- *Type:* string

A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#url_map ComputeRegionTargetHttpsProxy#url_map}

---

##### `CertificateManagerCertificates`<sup>Optional</sup> <a name="CertificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```csharp
public string[] CertificateManagerCertificates { get; set; }
```

- *Type:* string[]

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

sslCertificates and certificateManagerCertificates can't be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#certificate_manager_certificates ComputeRegionTargetHttpsProxy#certificate_manager_certificates}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#description ComputeRegionTargetHttpsProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#region ComputeRegionTargetHttpsProxy#region}

---

##### `ServerTlsPolicy`<sup>Optional</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; set; }
```

- *Type:* string

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#server_tls_policy ComputeRegionTargetHttpsProxy#server_tls_policy}

---

##### `SslCertificates`<sup>Optional</sup> <a name="SslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates"></a>

```csharp
public string[] SslCertificates { get; set; }
```

- *Type:* string[]

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#ssl_certificates ComputeRegionTargetHttpsProxy#ssl_certificates}

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslPolicy"></a>

```csharp
public string SslPolicy { get; set; }
```

- *Type:* string

A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#ssl_policy ComputeRegionTargetHttpsProxy#ssl_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts"></a>

```csharp
public ComputeRegionTargetHttpsProxyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#timeouts ComputeRegionTargetHttpsProxy#timeouts}

---

### ComputeRegionTargetHttpsProxyTimeouts <a name="ComputeRegionTargetHttpsProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetHttpsProxyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetHttpsProxyTimeoutsOutputReference <a name="ComputeRegionTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetHttpsProxyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



