# `computeTargetHttpsProxy` Submodule <a name="`computeTargetHttpsProxy` Submodule" id="@cdktf/provider-google.computeTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetHttpsProxy <a name="ComputeTargetHttpsProxy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy google_compute_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetHttpsProxy(Construct Scope, string Id, ComputeTargetHttpsProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig">ComputeTargetHttpsProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig">ComputeTargetHttpsProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates">ResetCertificateManagerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap">ResetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec">ResetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind">ResetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride">ResetQuicOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy">ResetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates">ResetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData">ResetTlsEarlyData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeTargetHttpsProxyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

---

##### `ResetCertificateManagerCertificates` <a name="ResetCertificateManagerCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```csharp
private void ResetCertificateManagerCertificates()
```

##### `ResetCertificateMap` <a name="ResetCertificateMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap"></a>

```csharp
private void ResetCertificateMap()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHttpKeepAliveTimeoutSec` <a name="ResetHttpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec"></a>

```csharp
private void ResetHttpKeepAliveTimeoutSec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProxyBind` <a name="ResetProxyBind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind"></a>

```csharp
private void ResetProxyBind()
```

##### `ResetQuicOverride` <a name="ResetQuicOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride"></a>

```csharp
private void ResetQuicOverride()
```

##### `ResetServerTlsPolicy` <a name="ResetServerTlsPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy"></a>

```csharp
private void ResetServerTlsPolicy()
```

##### `ResetSslCertificates` <a name="ResetSslCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates"></a>

```csharp
private void ResetSslCertificates()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy"></a>

```csharp
private void ResetSslPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsEarlyData` <a name="ResetTlsEarlyData" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData"></a>

```csharp
private void ResetTlsEarlyData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetHttpsProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetHttpsProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetHttpsProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetHttpsProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeTargetHttpsProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId">ProxyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput">CertificateManagerCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput">CertificateMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput">HttpKeepAliveTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput">ProxyBindInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput">QuicOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput">ServerTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput">SslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput">SslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput">TlsEarlyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput">UrlMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates">CertificateManagerCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap">CertificateMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec">HttpKeepAliveTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind">ProxyBind</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride">QuicOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates">SslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy">SslPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData">TlsEarlyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap">UrlMap</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId"></a>

```csharp
public double ProxyId { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts"></a>

```csharp
public ComputeTargetHttpsProxyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `CertificateManagerCertificatesInput`<sup>Optional</sup> <a name="CertificateManagerCertificatesInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```csharp
public string[] CertificateManagerCertificatesInput { get; }
```

- *Type:* string[]

---

##### `CertificateMapInput`<sup>Optional</sup> <a name="CertificateMapInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput"></a>

```csharp
public string CertificateMapInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HttpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="HttpKeepAliveTimeoutSecInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput"></a>

```csharp
public double HttpKeepAliveTimeoutSecInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProxyBindInput`<sup>Optional</sup> <a name="ProxyBindInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput"></a>

```csharp
public object ProxyBindInput { get; }
```

- *Type:* object

---

##### `QuicOverrideInput`<sup>Optional</sup> <a name="QuicOverrideInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput"></a>

```csharp
public string QuicOverrideInput { get; }
```

- *Type:* string

---

##### `ServerTlsPolicyInput`<sup>Optional</sup> <a name="ServerTlsPolicyInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```csharp
public string ServerTlsPolicyInput { get; }
```

- *Type:* string

---

##### `SslCertificatesInput`<sup>Optional</sup> <a name="SslCertificatesInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput"></a>

```csharp
public string[] SslCertificatesInput { get; }
```

- *Type:* string[]

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput"></a>

```csharp
public string SslPolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsEarlyDataInput`<sup>Optional</sup> <a name="TlsEarlyDataInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput"></a>

```csharp
public string TlsEarlyDataInput { get; }
```

- *Type:* string

---

##### `UrlMapInput`<sup>Optional</sup> <a name="UrlMapInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput"></a>

```csharp
public string UrlMapInput { get; }
```

- *Type:* string

---

##### `CertificateManagerCertificates`<sup>Required</sup> <a name="CertificateManagerCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates"></a>

```csharp
public string[] CertificateManagerCertificates { get; }
```

- *Type:* string[]

---

##### `CertificateMap`<sup>Required</sup> <a name="CertificateMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap"></a>

```csharp
public string CertificateMap { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HttpKeepAliveTimeoutSec`<sup>Required</sup> <a name="HttpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```csharp
public double HttpKeepAliveTimeoutSec { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProxyBind`<sup>Required</sup> <a name="ProxyBind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind"></a>

```csharp
public object ProxyBind { get; }
```

- *Type:* object

---

##### `QuicOverride`<sup>Required</sup> <a name="QuicOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride"></a>

```csharp
public string QuicOverride { get; }
```

- *Type:* string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; }
```

- *Type:* string

---

##### `SslCertificates`<sup>Required</sup> <a name="SslCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates"></a>

```csharp
public string[] SslCertificates { get; }
```

- *Type:* string[]

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy"></a>

```csharp
public string SslPolicy { get; }
```

- *Type:* string

---

##### `TlsEarlyData`<sup>Required</sup> <a name="TlsEarlyData" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData"></a>

```csharp
public string TlsEarlyData { get; }
```

- *Type:* string

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap"></a>

```csharp
public string UrlMap { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetHttpsProxyConfig <a name="ComputeTargetHttpsProxyConfig" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetHttpsProxyConfig {
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
    string CertificateMap = null,
    string Description = null,
    double HttpKeepAliveTimeoutSec = null,
    string Id = null,
    string Project = null,
    object ProxyBind = null,
    string QuicOverride = null,
    string ServerTlsPolicy = null,
    string[] SslCertificates = null,
    string SslPolicy = null,
    ComputeTargetHttpsProxyTimeouts Timeouts = null,
    string TlsEarlyData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap">UrlMap</a></code> | <code>string</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates">CertificateManagerCertificates</a></code> | <code>string[]</code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap">CertificateMap</a></code> | <code>string</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec">HttpKeepAliveTimeoutSec</a></code> | <code>double</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind">ProxyBind</a></code> | <code>object</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride">QuicOverride</a></code> | <code>string</code> | Specifies the QUIC override policy for this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates">SslCertificates</a></code> | <code>string[]</code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy">SslPolicy</a></code> | <code>string</code> | A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData">TlsEarlyData</a></code> | <code>string</code> | Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#name ComputeTargetHttpsProxy#name}

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap"></a>

```csharp
public string UrlMap { get; set; }
```

- *Type:* string

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#url_map ComputeTargetHttpsProxy#url_map}

---

##### `CertificateManagerCertificates`<sup>Optional</sup> <a name="CertificateManagerCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```csharp
public string[] CertificateManagerCertificates { get; set; }
```

- *Type:* string[]

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

Certificate manager certificates only apply when the load balancing scheme is set to INTERNAL_MANAGED.
For EXTERNAL and EXTERNAL_MANAGED, use certificate_map instead.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#certificate_manager_certificates ComputeTargetHttpsProxy#certificate_manager_certificates}

---

##### `CertificateMap`<sup>Optional</sup> <a name="CertificateMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap"></a>

```csharp
public string CertificateMap { get; set; }
```

- *Type:* string

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field is only supported for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
For INTERNAL_MANAGED, use certificate_manager_certificates instead.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#certificate_map ComputeTargetHttpsProxy#certificate_map}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#description ComputeTargetHttpsProxy#description}

---

##### `HttpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="HttpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```csharp
public double HttpKeepAliveTimeoutSec { get; set; }
```

- *Type:* double

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value will be used. For Global
external HTTP(S) load balancer, the default value is 610 seconds, the
minimum allowed value is 5 seconds and the maximum allowed value is 1200
seconds. For cross-region internal HTTP(S) load balancer, the default
value is 600 seconds, the minimum allowed value is 5 seconds, and the
maximum allowed value is 600 seconds. For Global external HTTP(S) load
balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#http_keep_alive_timeout_sec ComputeTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}.

---

##### `ProxyBind`<sup>Optional</sup> <a name="ProxyBind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind"></a>

```csharp
public object ProxyBind { get; set; }
```

- *Type:* object

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#proxy_bind ComputeTargetHttpsProxy#proxy_bind}

---

##### `QuicOverride`<sup>Optional</sup> <a name="QuicOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride"></a>

```csharp
public string QuicOverride { get; set; }
```

- *Type:* string

Specifies the QUIC override policy for this resource.

This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#quic_override ComputeTargetHttpsProxy#quic_override}

---

##### `ServerTlsPolicy`<sup>Optional</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; set; }
```

- *Type:* string

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#server_tls_policy ComputeTargetHttpsProxy#server_tls_policy}

---

##### `SslCertificates`<sup>Optional</sup> <a name="SslCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates"></a>

```csharp
public string[] SslCertificates { get; set; }
```

- *Type:* string[]

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#ssl_certificates ComputeTargetHttpsProxy#ssl_certificates}

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy"></a>

```csharp
public string SslPolicy { get; set; }
```

- *Type:* string

A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#ssl_policy ComputeTargetHttpsProxy#ssl_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts"></a>

```csharp
public ComputeTargetHttpsProxyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#timeouts ComputeTargetHttpsProxy#timeouts}

---

##### `TlsEarlyData`<sup>Optional</sup> <a name="TlsEarlyData" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData"></a>

```csharp
public string TlsEarlyData { get; set; }
```

- *Type:* string

Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#tls_early_data ComputeTargetHttpsProxy#tls_early_data}

---

### ComputeTargetHttpsProxyTimeouts <a name="ComputeTargetHttpsProxyTimeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetHttpsProxyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetHttpsProxyTimeoutsOutputReference <a name="ComputeTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetHttpsProxyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



