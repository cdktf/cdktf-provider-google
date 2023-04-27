# `google_compute_health_check`

Refer to the Terraform Registory for docs: [`google_compute_health_check`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check).

# `computeHealthCheck` Submodule <a name="`computeHealthCheck` Submodule" id="@cdktf/provider-google.computeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeHealthCheck <a name="ComputeHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check google_compute_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheck(Construct Scope, string Id, ComputeHealthCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig">ComputeHealthCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig">ComputeHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck">PutGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck">PutHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck">PutHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck">PutHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck">PutSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck">PutTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetGrpcHealthCheck">ResetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttp2HealthCheck">ResetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpHealthCheck">ResetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpsHealthCheck">ResetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSslHealthCheck">ResetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTcpHealthCheck">ResetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGrpcHealthCheck` <a name="PutGrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck"></a>

```csharp
private void PutGrpcHealthCheck(ComputeHealthCheckGrpcHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---

##### `PutHttp2HealthCheck` <a name="PutHttp2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck"></a>

```csharp
private void PutHttp2HealthCheck(ComputeHealthCheckHttp2HealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---

##### `PutHttpHealthCheck` <a name="PutHttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck"></a>

```csharp
private void PutHttpHealthCheck(ComputeHealthCheckHttpHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---

##### `PutHttpsHealthCheck` <a name="PutHttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck"></a>

```csharp
private void PutHttpsHealthCheck(ComputeHealthCheckHttpsHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig"></a>

```csharp
private void PutLogConfig(ComputeHealthCheckLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---

##### `PutSslHealthCheck` <a name="PutSslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck"></a>

```csharp
private void PutSslHealthCheck(ComputeHealthCheckSslHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---

##### `PutTcpHealthCheck` <a name="PutTcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck"></a>

```csharp
private void PutTcpHealthCheck(ComputeHealthCheckTcpHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeHealthCheckTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetCheckIntervalSec"></a>

```csharp
private void ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGrpcHealthCheck` <a name="ResetGrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetGrpcHealthCheck"></a>

```csharp
private void ResetGrpcHealthCheck()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetHttp2HealthCheck` <a name="ResetHttp2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttp2HealthCheck"></a>

```csharp
private void ResetHttp2HealthCheck()
```

##### `ResetHttpHealthCheck` <a name="ResetHttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpHealthCheck"></a>

```csharp
private void ResetHttpHealthCheck()
```

##### `ResetHttpsHealthCheck` <a name="ResetHttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpsHealthCheck"></a>

```csharp
private void ResetHttpsHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSslHealthCheck` <a name="ResetSslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSslHealthCheck"></a>

```csharp
private void ResetSslHealthCheck()
```

##### `ResetTcpHealthCheck` <a name="ResetTcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTcpHealthCheck"></a>

```csharp
private void ResetTcpHealthCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeoutSec"></a>

```csharp
private void ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeHealthCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeHealthCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeHealthCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference">ComputeHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference">ComputeHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference">ComputeHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference">ComputeHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference">ComputeHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference">ComputeHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference">ComputeHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference">ComputeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheckInput">GrpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheckInput">Http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheckInput">HttpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheckInput">HttpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheckInput">SslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheckInput">TcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `GrpcHealthCheck`<sup>Required</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheck"></a>

```csharp
public ComputeHealthCheckGrpcHealthCheckOutputReference GrpcHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference">ComputeHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `Http2HealthCheck`<sup>Required</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheck"></a>

```csharp
public ComputeHealthCheckHttp2HealthCheckOutputReference Http2HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference">ComputeHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `HttpHealthCheck`<sup>Required</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheck"></a>

```csharp
public ComputeHealthCheckHttpHealthCheckOutputReference HttpHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference">ComputeHealthCheckHttpHealthCheckOutputReference</a>

---

##### `HttpsHealthCheck`<sup>Required</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheck"></a>

```csharp
public ComputeHealthCheckHttpsHealthCheckOutputReference HttpsHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference">ComputeHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfig"></a>

```csharp
public ComputeHealthCheckLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference">ComputeHealthCheckLogConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SslHealthCheck`<sup>Required</sup> <a name="SslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheck"></a>

```csharp
public ComputeHealthCheckSslHealthCheckOutputReference SslHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference">ComputeHealthCheckSslHealthCheckOutputReference</a>

---

##### `TcpHealthCheck`<sup>Required</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheck"></a>

```csharp
public ComputeHealthCheckTcpHealthCheckOutputReference TcpHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference">ComputeHealthCheckTcpHealthCheckOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeouts"></a>

```csharp
public ComputeHealthCheckTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference">ComputeHealthCheckTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSecInput"></a>

```csharp
public double CheckIntervalSecInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GrpcHealthCheckInput`<sup>Optional</sup> <a name="GrpcHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheckInput"></a>

```csharp
public ComputeHealthCheckGrpcHealthCheck GrpcHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `Http2HealthCheckInput`<sup>Optional</sup> <a name="Http2HealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheckInput"></a>

```csharp
public ComputeHealthCheckHttp2HealthCheck Http2HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---

##### `HttpHealthCheckInput`<sup>Optional</sup> <a name="HttpHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheckInput"></a>

```csharp
public ComputeHealthCheckHttpHealthCheck HttpHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---

##### `HttpsHealthCheckInput`<sup>Optional</sup> <a name="HttpsHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheckInput"></a>

```csharp
public ComputeHealthCheckHttpsHealthCheck HttpsHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfigInput"></a>

```csharp
public ComputeHealthCheckLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SslHealthCheckInput`<sup>Optional</sup> <a name="SslHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheckInput"></a>

```csharp
public ComputeHealthCheckSslHealthCheck SslHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---

##### `TcpHealthCheckInput`<sup>Optional</sup> <a name="TcpHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheckInput"></a>

```csharp
public ComputeHealthCheckTcpHealthCheck TcpHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSecInput"></a>

```csharp
public double TimeoutSecInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeHealthCheckConfig <a name="ComputeHealthCheckConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double CheckIntervalSec = null,
    string Description = null,
    ComputeHealthCheckGrpcHealthCheck GrpcHealthCheck = null,
    double HealthyThreshold = null,
    ComputeHealthCheckHttp2HealthCheck Http2HealthCheck = null,
    ComputeHealthCheckHttpHealthCheck HttpHealthCheck = null,
    ComputeHealthCheckHttpsHealthCheck HttpsHealthCheck = null,
    string Id = null,
    ComputeHealthCheckLogConfig LogConfig = null,
    string Project = null,
    ComputeHealthCheckSslHealthCheck SslHealthCheck = null,
    ComputeHealthCheckTcpHealthCheck TcpHealthCheck = null,
    ComputeHealthCheckTimeouts Timeouts = null,
    double TimeoutSec = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#id ComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#project ComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#name ComputeHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; set; }
```

- *Type:* double

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#check_interval_sec ComputeHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#description ComputeHealthCheck#description}

---

##### `GrpcHealthCheck`<sup>Optional</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.grpcHealthCheck"></a>

```csharp
public ComputeHealthCheckGrpcHealthCheck GrpcHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#grpc_health_check ComputeHealthCheck#grpc_health_check}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#healthy_threshold ComputeHealthCheck#healthy_threshold}

---

##### `Http2HealthCheck`<sup>Optional</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.http2HealthCheck"></a>

```csharp
public ComputeHealthCheckHttp2HealthCheck Http2HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#http2_health_check ComputeHealthCheck#http2_health_check}

---

##### `HttpHealthCheck`<sup>Optional</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpHealthCheck"></a>

```csharp
public ComputeHealthCheckHttpHealthCheck HttpHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#http_health_check ComputeHealthCheck#http_health_check}

---

##### `HttpsHealthCheck`<sup>Optional</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpsHealthCheck"></a>

```csharp
public ComputeHealthCheckHttpsHealthCheck HttpsHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#https_health_check ComputeHealthCheck#https_health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#id ComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.logConfig"></a>

```csharp
public ComputeHealthCheckLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#log_config ComputeHealthCheck#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#project ComputeHealthCheck#project}.

---

##### `SslHealthCheck`<sup>Optional</sup> <a name="SslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sslHealthCheck"></a>

```csharp
public ComputeHealthCheckSslHealthCheck SslHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#ssl_health_check ComputeHealthCheck#ssl_health_check}

---

##### `TcpHealthCheck`<sup>Optional</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.tcpHealthCheck"></a>

```csharp
public ComputeHealthCheckTcpHealthCheck TcpHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#tcp_health_check ComputeHealthCheck#tcp_health_check}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeouts"></a>

```csharp
public ComputeHealthCheckTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#timeouts ComputeHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; set; }
```

- *Type:* double

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#timeout_sec ComputeHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#unhealthy_threshold ComputeHealthCheck#unhealthy_threshold}

---

### ComputeHealthCheckGrpcHealthCheck <a name="ComputeHealthCheckGrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckGrpcHealthCheck {
    string GrpcServiceName = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.grpcServiceName">GrpcServiceName</a></code> | <code>string</code> | The gRPC service name for the health check. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.port">Port</a></code> | <code>double</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `GrpcServiceName`<sup>Optional</sup> <a name="GrpcServiceName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```csharp
public string GrpcServiceName { get; set; }
```

- *Type:* string

The gRPC service name for the health check.

The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#grpc_service_name ComputeHealthCheck#grpc_service_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

### ComputeHealthCheckHttp2HealthCheck <a name="ComputeHealthCheckHttp2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckHttp2HealthCheck {
    string Host = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string RequestPath = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckHttpHealthCheck <a name="ComputeHealthCheckHttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckHttpHealthCheck {
    string Host = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string RequestPath = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckHttpsHealthCheck <a name="ComputeHealthCheckHttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckHttpsHealthCheck {
    string Host = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string RequestPath = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckLogConfig <a name="ComputeHealthCheckLogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckLogConfig {
    object Enable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.property.enable">Enable</a></code> | <code>object</code> | Indicates whether or not to export logs. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#enable ComputeHealthCheck#enable}

---

### ComputeHealthCheckSslHealthCheck <a name="ComputeHealthCheckSslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckSslHealthCheck {
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string Request = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.request">Request</a></code> | <code>string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.request"></a>

```csharp
public string Request { get; set; }
```

- *Type:* string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckTcpHealthCheck <a name="ComputeHealthCheckTcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckTcpHealthCheck {
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string Request = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the TCP health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.request">Request</a></code> | <code>string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the TCP health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.request"></a>

```csharp
public string Request { get; set; }
```

- *Type:* string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckTimeouts <a name="ComputeHealthCheckTimeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#create ComputeHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#delete ComputeHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#update ComputeHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#create ComputeHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#delete ComputeHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_health_check#update ComputeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeHealthCheckGrpcHealthCheckOutputReference <a name="ComputeHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckGrpcHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">ResetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrpcServiceName` <a name="ResetGrpcServiceName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```csharp
private void ResetGrpcServiceName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">GrpcServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">GrpcServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrpcServiceNameInput`<sup>Optional</sup> <a name="GrpcServiceNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```csharp
public string GrpcServiceNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `GrpcServiceName`<sup>Required</sup> <a name="GrpcServiceName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```csharp
public string GrpcServiceName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```csharp
public ComputeHealthCheckGrpcHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---


### ComputeHealthCheckHttp2HealthCheckOutputReference <a name="ComputeHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckHttp2HealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```csharp
public ComputeHealthCheckHttp2HealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---


### ComputeHealthCheckHttpHealthCheckOutputReference <a name="ComputeHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckHttpHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```csharp
public ComputeHealthCheckHttpHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---


### ComputeHealthCheckHttpsHealthCheckOutputReference <a name="ComputeHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckHttpsHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```csharp
public ComputeHealthCheckHttpsHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---


### ComputeHealthCheckLogConfigOutputReference <a name="ComputeHealthCheckLogConfigOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeHealthCheckLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---


### ComputeHealthCheckSslHealthCheckOutputReference <a name="ComputeHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckSslHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```csharp
private void ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```csharp
public string RequestInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```csharp
public ComputeHealthCheckSslHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---


### ComputeHealthCheckTcpHealthCheckOutputReference <a name="ComputeHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckTcpHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```csharp
private void ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```csharp
public string RequestInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```csharp
public ComputeHealthCheckTcpHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---


### ComputeHealthCheckTimeoutsOutputReference <a name="ComputeHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHealthCheckTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



