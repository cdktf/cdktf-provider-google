# `computeRegionHealthCheck` Submodule <a name="`computeRegionHealthCheck` Submodule" id="@cdktf/provider-google.computeRegionHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthCheck <a name="ComputeRegionHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check google_compute_region_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheck(scope Construct, id *string, config ComputeRegionHealthCheckConfig) ComputeRegionHealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig">ComputeRegionHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig">ComputeRegionHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck">PutGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck">PutHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck">PutHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck">PutHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck">PutSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck">PutTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetGrpcHealthCheck">ResetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttp2HealthCheck">ResetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpHealthCheck">ResetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpsHealthCheck">ResetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetSslHealthCheck">ResetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTcpHealthCheck">ResetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGrpcHealthCheck` <a name="PutGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck"></a>

```go
func PutGrpcHealthCheck(value ComputeRegionHealthCheckGrpcHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `PutHttp2HealthCheck` <a name="PutHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck"></a>

```go
func PutHttp2HealthCheck(value ComputeRegionHealthCheckHttp2HealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `PutHttpHealthCheck` <a name="PutHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck"></a>

```go
func PutHttpHealthCheck(value ComputeRegionHealthCheckHttpHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `PutHttpsHealthCheck` <a name="PutHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck"></a>

```go
func PutHttpsHealthCheck(value ComputeRegionHealthCheckHttpsHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig"></a>

```go
func PutLogConfig(value ComputeRegionHealthCheckLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---

##### `PutSslHealthCheck` <a name="PutSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck"></a>

```go
func PutSslHealthCheck(value ComputeRegionHealthCheckSslHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---

##### `PutTcpHealthCheck` <a name="PutTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck"></a>

```go
func PutTcpHealthCheck(value ComputeRegionHealthCheckTcpHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionHealthCheckTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetCheckIntervalSec"></a>

```go
func ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGrpcHealthCheck` <a name="ResetGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetGrpcHealthCheck"></a>

```go
func ResetGrpcHealthCheck()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetHttp2HealthCheck` <a name="ResetHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttp2HealthCheck"></a>

```go
func ResetHttp2HealthCheck()
```

##### `ResetHttpHealthCheck` <a name="ResetHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpHealthCheck"></a>

```go
func ResetHttpHealthCheck()
```

##### `ResetHttpsHealthCheck` <a name="ResetHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpsHealthCheck"></a>

```go
func ResetHttpsHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetId"></a>

```go
func ResetId()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSslHealthCheck` <a name="ResetSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetSslHealthCheck"></a>

```go
func ResetSslHealthCheck()
```

##### `ResetTcpHealthCheck` <a name="ResetTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTcpHealthCheck"></a>

```go
func ResetTcpHealthCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.ComputeRegionHealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.ComputeRegionHealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.ComputeRegionHealthCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference">ComputeRegionHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference">ComputeRegionHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference">ComputeRegionHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference">ComputeRegionHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference">ComputeRegionHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference">ComputeRegionHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference">ComputeRegionHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference">ComputeRegionHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheckInput">GrpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheckInput">Http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheckInput">HttpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheckInput">HttpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheckInput">SslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheckInput">TcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `GrpcHealthCheck`<sup>Required</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheck"></a>

```go
func GrpcHealthCheck() ComputeRegionHealthCheckGrpcHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference">ComputeRegionHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `Http2HealthCheck`<sup>Required</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheck"></a>

```go
func Http2HealthCheck() ComputeRegionHealthCheckHttp2HealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference">ComputeRegionHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `HttpHealthCheck`<sup>Required</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheck"></a>

```go
func HttpHealthCheck() ComputeRegionHealthCheckHttpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference">ComputeRegionHealthCheckHttpHealthCheckOutputReference</a>

---

##### `HttpsHealthCheck`<sup>Required</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheck"></a>

```go
func HttpsHealthCheck() ComputeRegionHealthCheckHttpsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference">ComputeRegionHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfig"></a>

```go
func LogConfig() ComputeRegionHealthCheckLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference">ComputeRegionHealthCheckLogConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SslHealthCheck`<sup>Required</sup> <a name="SslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheck"></a>

```go
func SslHealthCheck() ComputeRegionHealthCheckSslHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference">ComputeRegionHealthCheckSslHealthCheckOutputReference</a>

---

##### `TcpHealthCheck`<sup>Required</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheck"></a>

```go
func TcpHealthCheck() ComputeRegionHealthCheckTcpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference">ComputeRegionHealthCheckTcpHealthCheckOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeouts"></a>

```go
func Timeouts() ComputeRegionHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference">ComputeRegionHealthCheckTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSecInput"></a>

```go
func CheckIntervalSecInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GrpcHealthCheckInput`<sup>Optional</sup> <a name="GrpcHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheckInput"></a>

```go
func GrpcHealthCheckInput() ComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `Http2HealthCheckInput`<sup>Optional</sup> <a name="Http2HealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheckInput"></a>

```go
func Http2HealthCheckInput() ComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `HttpHealthCheckInput`<sup>Optional</sup> <a name="HttpHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheckInput"></a>

```go
func HttpHealthCheckInput() ComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `HttpsHealthCheckInput`<sup>Optional</sup> <a name="HttpsHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheckInput"></a>

```go
func HttpsHealthCheckInput() ComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfigInput"></a>

```go
func LogConfigInput() ComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SslHealthCheckInput`<sup>Optional</sup> <a name="SslHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheckInput"></a>

```go
func SslHealthCheckInput() ComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---

##### `TcpHealthCheckInput`<sup>Optional</sup> <a name="TcpHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheckInput"></a>

```go
func TcpHealthCheckInput() ComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSec"></a>

```go
func CheckIntervalSec() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthCheckConfig <a name="ComputeRegionHealthCheckConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CheckIntervalSec: *f64,
	Description: *string,
	GrpcHealthCheck: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck,
	HealthyThreshold: *f64,
	Http2HealthCheck: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck,
	HttpHealthCheck: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck,
	HttpsHealthCheck: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck,
	Id: *string,
	LogConfig: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig,
	Project: *string,
	Region: *string,
	SslHealthCheck: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck,
	TcpHealthCheck: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts,
	TimeoutSec: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#id ComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#project ComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#name ComputeRegionHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.checkIntervalSec"></a>

```go
CheckIntervalSec *f64
```

- *Type:* *f64

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#check_interval_sec ComputeRegionHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#description ComputeRegionHealthCheck#description}

---

##### `GrpcHealthCheck`<sup>Optional</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.grpcHealthCheck"></a>

```go
GrpcHealthCheck ComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#grpc_health_check ComputeRegionHealthCheck#grpc_health_check}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#healthy_threshold ComputeRegionHealthCheck#healthy_threshold}

---

##### `Http2HealthCheck`<sup>Optional</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.http2HealthCheck"></a>

```go
Http2HealthCheck ComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#http2_health_check ComputeRegionHealthCheck#http2_health_check}

---

##### `HttpHealthCheck`<sup>Optional</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpHealthCheck"></a>

```go
HttpHealthCheck ComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#http_health_check ComputeRegionHealthCheck#http_health_check}

---

##### `HttpsHealthCheck`<sup>Optional</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpsHealthCheck"></a>

```go
HttpsHealthCheck ComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#https_health_check ComputeRegionHealthCheck#https_health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#id ComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.logConfig"></a>

```go
LogConfig ComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#log_config ComputeRegionHealthCheck#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#project ComputeRegionHealthCheck#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#region ComputeRegionHealthCheck#region}

---

##### `SslHealthCheck`<sup>Optional</sup> <a name="SslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.sslHealthCheck"></a>

```go
SslHealthCheck ComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#ssl_health_check ComputeRegionHealthCheck#ssl_health_check}

---

##### `TcpHealthCheck`<sup>Optional</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.tcpHealthCheck"></a>

```go
TcpHealthCheck ComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#tcp_health_check ComputeRegionHealthCheck#tcp_health_check}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionHealthCheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#timeouts ComputeRegionHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#timeout_sec ComputeRegionHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#unhealthy_threshold ComputeRegionHealthCheck#unhealthy_threshold}

---

### ComputeRegionHealthCheckGrpcHealthCheck <a name="ComputeRegionHealthCheckGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckGrpcHealthCheck {
	GrpcServiceName: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName">GrpcServiceName</a></code> | <code>*string</code> | The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `GrpcServiceName`<sup>Optional</sup> <a name="GrpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```go
GrpcServiceName *string
```

- *Type:* *string

The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:.

Empty serviceName means the overall status of all services at the backend.
Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#grpc_service_name ComputeRegionHealthCheck#grpc_service_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

### ComputeRegionHealthCheckHttp2HealthCheck <a name="ComputeRegionHealthCheckHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckHttp2HealthCheck {
	Host: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	RequestPath: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckHttpHealthCheck <a name="ComputeRegionHealthCheckHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckHttpHealthCheck {
	Host: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	RequestPath: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckHttpsHealthCheck <a name="ComputeRegionHealthCheckHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckHttpsHealthCheck {
	Host: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	RequestPath: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckLogConfig <a name="ComputeRegionHealthCheckLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckLogConfig {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Indicates whether or not to export logs. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#enable ComputeRegionHealthCheck#enable}

---

### ComputeRegionHealthCheckSslHealthCheck <a name="ComputeRegionHealthCheckSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckSslHealthCheck {
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	Request: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.request">Request</a></code> | <code>*string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.request"></a>

```go
Request *string
```

- *Type:* *string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request ComputeRegionHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckTcpHealthCheck <a name="ComputeRegionHealthCheckTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckTcpHealthCheck {
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	Request: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the TCP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.request">Request</a></code> | <code>*string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the TCP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.request"></a>

```go
Request *string
```

- *Type:* *string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request ComputeRegionHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckTimeouts <a name="ComputeRegionHealthCheckTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

&computeregionhealthcheck.ComputeRegionHealthCheckTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#create ComputeRegionHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#delete ComputeRegionHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#update ComputeRegionHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#create ComputeRegionHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#delete ComputeRegionHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#update ComputeRegionHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthCheckGrpcHealthCheckOutputReference <a name="ComputeRegionHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckGrpcHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckGrpcHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">ResetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrpcServiceName` <a name="ResetGrpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```go
func ResetGrpcServiceName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">GrpcServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">GrpcServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrpcServiceNameInput`<sup>Optional</sup> <a name="GrpcServiceNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```go
func GrpcServiceNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `GrpcServiceName`<sup>Required</sup> <a name="GrpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```go
func GrpcServiceName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---


### ComputeRegionHealthCheckHttp2HealthCheckOutputReference <a name="ComputeRegionHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckHttp2HealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckHttp2HealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---


### ComputeRegionHealthCheckHttpHealthCheckOutputReference <a name="ComputeRegionHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckHttpHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckHttpHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---


### ComputeRegionHealthCheckHttpsHealthCheckOutputReference <a name="ComputeRegionHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckHttpsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckHttpsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---


### ComputeRegionHealthCheckLogConfigOutputReference <a name="ComputeRegionHealthCheckLogConfigOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---


### ComputeRegionHealthCheckSslHealthCheckOutputReference <a name="ComputeRegionHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckSslHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckSslHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---


### ComputeRegionHealthCheckTcpHealthCheckOutputReference <a name="ComputeRegionHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckTcpHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckTcpHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---


### ComputeRegionHealthCheckTimeoutsOutputReference <a name="ComputeRegionHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionhealthcheck"

computeregionhealthcheck.NewComputeRegionHealthCheckTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthCheckTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



