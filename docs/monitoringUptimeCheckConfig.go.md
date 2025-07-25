# `monitoringUptimeCheckConfig` Submodule <a name="`monitoringUptimeCheckConfig` Submodule" id="@cdktf/provider-google.monitoringUptimeCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringUptimeCheckConfig <a name="MonitoringUptimeCheckConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config google_monitoring_uptime_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfig(scope Construct, id *string, config MonitoringUptimeCheckConfigConfig) MonitoringUptimeCheckConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig">MonitoringUptimeCheckConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig">MonitoringUptimeCheckConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putContentMatchers">PutContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putHttpCheck">PutHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putMonitoredResource">PutMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putResourceGroup">PutResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putSyntheticMonitor">PutSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTcpCheck">PutTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetCheckerType">ResetCheckerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetContentMatchers">ResetContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetHttpCheck">ResetHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetLogCheckFailures">ResetLogCheckFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetMonitoredResource">ResetMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSelectedRegions">ResetSelectedRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSyntheticMonitor">ResetSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTcpCheck">ResetTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentMatchers` <a name="PutContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putContentMatchers"></a>

```go
func PutContentMatchers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putContentMatchers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHttpCheck` <a name="PutHttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putHttpCheck"></a>

```go
func PutHttpCheck(value MonitoringUptimeCheckConfigHttpCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putHttpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

---

##### `PutMonitoredResource` <a name="PutMonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putMonitoredResource"></a>

```go
func PutMonitoredResource(value MonitoringUptimeCheckConfigMonitoredResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putMonitoredResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `PutResourceGroup` <a name="PutResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putResourceGroup"></a>

```go
func PutResourceGroup(value MonitoringUptimeCheckConfigResourceGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

---

##### `PutSyntheticMonitor` <a name="PutSyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putSyntheticMonitor"></a>

```go
func PutSyntheticMonitor(value MonitoringUptimeCheckConfigSyntheticMonitor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putSyntheticMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `PutTcpCheck` <a name="PutTcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTcpCheck"></a>

```go
func PutTcpCheck(value MonitoringUptimeCheckConfigTcpCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTcpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTimeouts"></a>

```go
func PutTimeouts(value MonitoringUptimeCheckConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a>

---

##### `ResetCheckerType` <a name="ResetCheckerType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetCheckerType"></a>

```go
func ResetCheckerType()
```

##### `ResetContentMatchers` <a name="ResetContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetContentMatchers"></a>

```go
func ResetContentMatchers()
```

##### `ResetHttpCheck` <a name="ResetHttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetHttpCheck"></a>

```go
func ResetHttpCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLogCheckFailures` <a name="ResetLogCheckFailures" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetLogCheckFailures"></a>

```go
func ResetLogCheckFailures()
```

##### `ResetMonitoredResource` <a name="ResetMonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetMonitoredResource"></a>

```go
func ResetMonitoredResource()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetSelectedRegions` <a name="ResetSelectedRegions" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSelectedRegions"></a>

```go
func ResetSelectedRegions()
```

##### `ResetSyntheticMonitor` <a name="ResetSyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSyntheticMonitor"></a>

```go
func ResetSyntheticMonitor()
```

##### `ResetTcpCheck` <a name="ResetTcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTcpCheck"></a>

```go
func ResetTcpCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetUserLabels"></a>

```go
func ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.MonitoringUptimeCheckConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.MonitoringUptimeCheckConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.MonitoringUptimeCheckConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.MonitoringUptimeCheckConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitoringUptimeCheckConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitoringUptimeCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringUptimeCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchers">ContentMatchers</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList">MonitoringUptimeCheckConfigContentMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheck">HttpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference">MonitoringUptimeCheckConfigHttpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResource">MonitoredResource</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference">MonitoringUptimeCheckConfigMonitoredResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroup">ResourceGroup</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference">MonitoringUptimeCheckConfigResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitor">SyntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference">MonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheck">TcpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference">MonitoringUptimeCheckConfigTcpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference">MonitoringUptimeCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.uptimeCheckId">UptimeCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerTypeInput">CheckerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchersInput">ContentMatchersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheckInput">HttpCheckInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.logCheckFailuresInput">LogCheckFailuresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResourceInput">MonitoredResourceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroupInput">ResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegionsInput">SelectedRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitorInput">SyntheticMonitorInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheckInput">TcpCheckInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabelsInput">UserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerType">CheckerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.logCheckFailures">LogCheckFailures</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegions">SelectedRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentMatchers`<sup>Required</sup> <a name="ContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchers"></a>

```go
func ContentMatchers() MonitoringUptimeCheckConfigContentMatchersList
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList">MonitoringUptimeCheckConfigContentMatchersList</a>

---

##### `HttpCheck`<sup>Required</sup> <a name="HttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheck"></a>

```go
func HttpCheck() MonitoringUptimeCheckConfigHttpCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference">MonitoringUptimeCheckConfigHttpCheckOutputReference</a>

---

##### `MonitoredResource`<sup>Required</sup> <a name="MonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResource"></a>

```go
func MonitoredResource() MonitoringUptimeCheckConfigMonitoredResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference">MonitoringUptimeCheckConfigMonitoredResourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroup"></a>

```go
func ResourceGroup() MonitoringUptimeCheckConfigResourceGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference">MonitoringUptimeCheckConfigResourceGroupOutputReference</a>

---

##### `SyntheticMonitor`<sup>Required</sup> <a name="SyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitor"></a>

```go
func SyntheticMonitor() MonitoringUptimeCheckConfigSyntheticMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference">MonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a>

---

##### `TcpCheck`<sup>Required</sup> <a name="TcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheck"></a>

```go
func TcpCheck() MonitoringUptimeCheckConfigTcpCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference">MonitoringUptimeCheckConfigTcpCheckOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeouts"></a>

```go
func Timeouts() MonitoringUptimeCheckConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference">MonitoringUptimeCheckConfigTimeoutsOutputReference</a>

---

##### `UptimeCheckId`<sup>Required</sup> <a name="UptimeCheckId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.uptimeCheckId"></a>

```go
func UptimeCheckId() *string
```

- *Type:* *string

---

##### `CheckerTypeInput`<sup>Optional</sup> <a name="CheckerTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerTypeInput"></a>

```go
func CheckerTypeInput() *string
```

- *Type:* *string

---

##### `ContentMatchersInput`<sup>Optional</sup> <a name="ContentMatchersInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchersInput"></a>

```go
func ContentMatchersInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `HttpCheckInput`<sup>Optional</sup> <a name="HttpCheckInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheckInput"></a>

```go
func HttpCheckInput() MonitoringUptimeCheckConfigHttpCheck
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogCheckFailuresInput`<sup>Optional</sup> <a name="LogCheckFailuresInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.logCheckFailuresInput"></a>

```go
func LogCheckFailuresInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoredResourceInput`<sup>Optional</sup> <a name="MonitoredResourceInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResourceInput"></a>

```go
func MonitoredResourceInput() MonitoringUptimeCheckConfigMonitoredResource
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() MonitoringUptimeCheckConfigResourceGroup
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

---

##### `SelectedRegionsInput`<sup>Optional</sup> <a name="SelectedRegionsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegionsInput"></a>

```go
func SelectedRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SyntheticMonitorInput`<sup>Optional</sup> <a name="SyntheticMonitorInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitorInput"></a>

```go
func SyntheticMonitorInput() MonitoringUptimeCheckConfigSyntheticMonitor
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `TcpCheckInput`<sup>Optional</sup> <a name="TcpCheckInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheckInput"></a>

```go
func TcpCheckInput() MonitoringUptimeCheckConfigTcpCheck
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabelsInput"></a>

```go
func UserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CheckerType`<sup>Required</sup> <a name="CheckerType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerType"></a>

```go
func CheckerType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogCheckFailures`<sup>Required</sup> <a name="LogCheckFailures" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.logCheckFailures"></a>

```go
func LogCheckFailures() interface{}
```

- *Type:* interface{}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SelectedRegions`<sup>Required</sup> <a name="SelectedRegions" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegions"></a>

```go
func SelectedRegions() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabels"></a>

```go
func UserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringUptimeCheckConfigConfig <a name="MonitoringUptimeCheckConfigConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Timeout: *string,
	CheckerType: *string,
	ContentMatchers: interface{},
	HttpCheck: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck,
	Id: *string,
	LogCheckFailures: interface{},
	MonitoredResource: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource,
	Period: *string,
	Project: *string,
	ResourceGroup: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup,
	SelectedRegions: *[]*string,
	SyntheticMonitor: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor,
	TcpCheck: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts,
	UserLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A human-friendly name for the uptime check configuration. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeout">Timeout</a></code> | <code>*string</code> | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.checkerType">CheckerType</a></code> | <code>*string</code> | The checker type to use for the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.contentMatchers">ContentMatchers</a></code> | <code>interface{}</code> | content_matchers block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.httpCheck">HttpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a></code> | http_check block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#id MonitoringUptimeCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.logCheckFailures">LogCheckFailures</a></code> | <code>interface{}</code> | Specifies whether to log the results of failed probes to Cloud Logging. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.monitoredResource">MonitoredResource</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a></code> | monitored_resource block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.period">Period</a></code> | <code>*string</code> | How often, in seconds, the uptime check is performed. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#project MonitoringUptimeCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.resourceGroup">ResourceGroup</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.selectedRegions">SelectedRegions</a></code> | <code>*[]*string</code> | The list of regions from which the check will be run. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.syntheticMonitor">SyntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a></code> | synthetic_monitor block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.tcpCheck">TcpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a></code> | tcp_check block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A human-friendly name for the uptime check configuration.

The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#display_name MonitoringUptimeCheckConfig#display_name}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds).

[See the accepted formats](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#timeout MonitoringUptimeCheckConfig#timeout}

---

##### `CheckerType`<sup>Optional</sup> <a name="CheckerType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.checkerType"></a>

```go
CheckerType *string
```

- *Type:* *string

The checker type to use for the check.

If the monitored resource type is 'servicedirectory_service', 'checker_type' must be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#checker_type MonitoringUptimeCheckConfig#checker_type}

---

##### `ContentMatchers`<sup>Optional</sup> <a name="ContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.contentMatchers"></a>

```go
ContentMatchers interface{}
```

- *Type:* interface{}

content_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#content_matchers MonitoringUptimeCheckConfig#content_matchers}

---

##### `HttpCheck`<sup>Optional</sup> <a name="HttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.httpCheck"></a>

```go
HttpCheck MonitoringUptimeCheckConfigHttpCheck
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

http_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#http_check MonitoringUptimeCheckConfig#http_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#id MonitoringUptimeCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogCheckFailures`<sup>Optional</sup> <a name="LogCheckFailures" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.logCheckFailures"></a>

```go
LogCheckFailures interface{}
```

- *Type:* interface{}

Specifies whether to log the results of failed probes to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#log_check_failures MonitoringUptimeCheckConfig#log_check_failures}

---

##### `MonitoredResource`<sup>Optional</sup> <a name="MonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.monitoredResource"></a>

```go
MonitoredResource MonitoringUptimeCheckConfigMonitoredResource
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

monitored_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#monitored_resource MonitoringUptimeCheckConfig#monitored_resource}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

How often, in seconds, the uptime check is performed.

Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#period MonitoringUptimeCheckConfig#period}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#project MonitoringUptimeCheckConfig#project}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.resourceGroup"></a>

```go
ResourceGroup MonitoringUptimeCheckConfigResourceGroup
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#resource_group MonitoringUptimeCheckConfig#resource_group}

---

##### `SelectedRegions`<sup>Optional</sup> <a name="SelectedRegions" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.selectedRegions"></a>

```go
SelectedRegions *[]*string
```

- *Type:* *[]*string

The list of regions from which the check will be run.

Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#selected_regions MonitoringUptimeCheckConfig#selected_regions}

---

##### `SyntheticMonitor`<sup>Optional</sup> <a name="SyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.syntheticMonitor"></a>

```go
SyntheticMonitor MonitoringUptimeCheckConfigSyntheticMonitor
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

synthetic_monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#synthetic_monitor MonitoringUptimeCheckConfig#synthetic_monitor}

---

##### `TcpCheck`<sup>Optional</sup> <a name="TcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.tcpCheck"></a>

```go
TcpCheck MonitoringUptimeCheckConfigTcpCheck
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

tcp_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#tcp_check MonitoringUptimeCheckConfig#tcp_check}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeouts"></a>

```go
Timeouts MonitoringUptimeCheckConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#timeouts MonitoringUptimeCheckConfig#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.userLabels"></a>

```go
UserLabels *map[string]*string
```

- *Type:* *map[string]*string

User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#user_labels MonitoringUptimeCheckConfig#user_labels}

---

### MonitoringUptimeCheckConfigContentMatchers <a name="MonitoringUptimeCheckConfigContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigContentMatchers {
	Content: *string,
	JsonPathMatcher: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher,
	Matcher: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.content">Content</a></code> | <code>*string</code> | String or regex content to match (max 1024 bytes). |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher">JsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | json_path_matcher block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.matcher">Matcher</a></code> | <code>*string</code> | The type of content matcher that will be applied to the server output, compared to the content string when the check is run. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.content"></a>

```go
Content *string
```

- *Type:* *string

String or regex content to match (max 1024 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#content MonitoringUptimeCheckConfig#content}

---

##### `JsonPathMatcher`<sup>Optional</sup> <a name="JsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher"></a>

```go
JsonPathMatcher MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

json_path_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#json_path_matcher MonitoringUptimeCheckConfig#json_path_matcher}

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.matcher"></a>

```go
Matcher *string
```

- *Type:* *string

The type of content matcher that will be applied to the server output, compared to the content string when the check is run.

Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NOT_MATCHES_REGEX", "MATCHES_JSON_PATH", "NOT_MATCHES_JSON_PATH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#matcher MonitoringUptimeCheckConfig#matcher}

---

### MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher <a name="MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher {
	JsonPath: *string,
	JsonMatcher: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath">JsonPath</a></code> | <code>*string</code> | JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher">JsonMatcher</a></code> | <code>*string</code> | Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"]. |

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath"></a>

```go
JsonPath *string
```

- *Type:* *string

JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#json_path MonitoringUptimeCheckConfig#json_path}

---

##### `JsonMatcher`<sup>Optional</sup> <a name="JsonMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher"></a>

```go
JsonMatcher *string
```

- *Type:* *string

Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#json_matcher MonitoringUptimeCheckConfig#json_matcher}

---

### MonitoringUptimeCheckConfigHttpCheck <a name="MonitoringUptimeCheckConfigHttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigHttpCheck {
	AcceptedResponseStatusCodes: interface{},
	AuthInfo: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo,
	Body: *string,
	ContentType: *string,
	CustomContentType: *string,
	Headers: *map[string]*string,
	MaskHeaders: interface{},
	Path: *string,
	PingConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig,
	Port: *f64,
	RequestMethod: *string,
	ServiceAgentAuthentication: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication,
	UseSsl: interface{},
	ValidateSsl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes">AcceptedResponseStatusCodes</a></code> | <code>interface{}</code> | accepted_response_status_codes block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.authInfo">AuthInfo</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | auth_info block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.body">Body</a></code> | <code>*string</code> | The request body associated with the HTTP POST request. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.contentType">ContentType</a></code> | <code>*string</code> | The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"]. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.customContentType">CustomContentType</a></code> | <code>*string</code> | A user provided content type header to use for the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.headers">Headers</a></code> | <code>*map[string]*string</code> | The list of headers to send as part of the uptime check request. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.maskHeaders">MaskHeaders</a></code> | <code>interface{}</code> | Boolean specifying whether to encrypt the header information. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.path">Path</a></code> | <code>*string</code> | The path to the page to run the check against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | ping_config block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.port">Port</a></code> | <code>*f64</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | The HTTP request method to use for the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication">ServiceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | service_agent_authentication block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.useSsl">UseSsl</a></code> | <code>interface{}</code> | If true, use HTTPS instead of HTTP to run the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.validateSsl">ValidateSsl</a></code> | <code>interface{}</code> | Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. |

---

##### `AcceptedResponseStatusCodes`<sup>Optional</sup> <a name="AcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes"></a>

```go
AcceptedResponseStatusCodes interface{}
```

- *Type:* interface{}

accepted_response_status_codes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#accepted_response_status_codes MonitoringUptimeCheckConfig#accepted_response_status_codes}

---

##### `AuthInfo`<sup>Optional</sup> <a name="AuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.authInfo"></a>

```go
AuthInfo MonitoringUptimeCheckConfigHttpCheckAuthInfo
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

auth_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#auth_info MonitoringUptimeCheckConfig#auth_info}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.body"></a>

```go
Body *string
```

- *Type:* *string

The request body associated with the HTTP POST request.

If 'content_type' is 'URL_ENCODED', the body passed in must be URL-encoded. Users can provide a 'Content-Length' header via the 'headers' field or the API will do so. If the 'request_method' is 'GET' and 'body' is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. 'foo=bar' in URL-encoded form is 'foo%3Dbar' and in base64 encoding is 'Zm9vJTI1M0RiYXI='.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#body MonitoringUptimeCheckConfig#body}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#content_type MonitoringUptimeCheckConfig#content_type}

---

##### `CustomContentType`<sup>Optional</sup> <a name="CustomContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.customContentType"></a>

```go
CustomContentType *string
```

- *Type:* *string

A user provided content type header to use for the check.

The invalid configurations outlined in the 'content_type' field apply to custom_content_type', as well as the following 1. 'content_type' is 'URL_ENCODED' and 'custom_content_type' is set. 2. 'content_type' is 'USER_PROVIDED' and 'custom_content_type' is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#custom_content_type MonitoringUptimeCheckConfig#custom_content_type}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

The list of headers to send as part of the uptime check request.

If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described in [RFC 2616 (page 31)](https://www.w3.org/Protocols/rfc2616/rfc2616.txt). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#headers MonitoringUptimeCheckConfig#headers}

---

##### `MaskHeaders`<sup>Optional</sup> <a name="MaskHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.maskHeaders"></a>

```go
MaskHeaders interface{}
```

- *Type:* interface{}

Boolean specifying whether to encrypt the header information.

Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if 'mask_headers' is set to 'true' then the headers will be obscured with '******'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#mask_headers MonitoringUptimeCheckConfig#mask_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path to the page to run the check against.

Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with '/', a '/' will be prepended automatically. Optional (defaults to '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#path MonitoringUptimeCheckConfig#path}

---

##### `PingConfig`<sup>Optional</sup> <a name="PingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.pingConfig"></a>

```go
PingConfig MonitoringUptimeCheckConfigHttpCheckPingConfig
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#ping_config MonitoringUptimeCheckConfig#ping_config}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port to the page to run the check against.

Will be combined with 'host' (specified within the ['monitored_resource'](#nested_monitored_resource)) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#port MonitoringUptimeCheckConfig#port}

---

##### `RequestMethod`<sup>Optional</sup> <a name="RequestMethod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.requestMethod"></a>

```go
RequestMethod *string
```

- *Type:* *string

The HTTP request method to use for the check.

If set to 'METHOD_UNSPECIFIED' then 'request_method' defaults to 'GET'. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#request_method MonitoringUptimeCheckConfig#request_method}

---

##### `ServiceAgentAuthentication`<sup>Optional</sup> <a name="ServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication"></a>

```go
ServiceAgentAuthentication MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

service_agent_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#service_agent_authentication MonitoringUptimeCheckConfig#service_agent_authentication}

---

##### `UseSsl`<sup>Optional</sup> <a name="UseSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.useSsl"></a>

```go
UseSsl interface{}
```

- *Type:* interface{}

If true, use HTTPS instead of HTTP to run the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#use_ssl MonitoringUptimeCheckConfig#use_ssl}

---

##### `ValidateSsl`<sup>Optional</sup> <a name="ValidateSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.validateSsl"></a>

```go
ValidateSsl interface{}
```

- *Type:* interface{}

Boolean specifying whether to include SSL certificate validation as a part of the Uptime check.

Only applies to checks where 'monitored_resource' is set to 'uptime_url'. If 'use_ssl' is 'false', setting 'validate_ssl' to 'true' has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#validate_ssl MonitoringUptimeCheckConfig#validate_ssl}

---

### MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes <a name="MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes {
	StatusClass: *string,
	StatusValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass">StatusClass</a></code> | <code>*string</code> | A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"]. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue">StatusValue</a></code> | <code>*f64</code> | A status code to accept. |

---

##### `StatusClass`<sup>Optional</sup> <a name="StatusClass" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass"></a>

```go
StatusClass *string
```

- *Type:* *string

A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#status_class MonitoringUptimeCheckConfig#status_class}

---

##### `StatusValue`<sup>Optional</sup> <a name="StatusValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue"></a>

```go
StatusValue *f64
```

- *Type:* *f64

A status code to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#status_value MonitoringUptimeCheckConfig#status_value}

---

### MonitoringUptimeCheckConfigHttpCheckAuthInfo <a name="MonitoringUptimeCheckConfigHttpCheckAuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo {
	Username: *string,
	Password: *string,
	PasswordWo: *string,
	PasswordWoVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username">Username</a></code> | <code>*string</code> | The username to authenticate. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password">Password</a></code> | <code>*string</code> | The password to authenticate. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | The password to authenticate. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | The password write-only version. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#username MonitoringUptimeCheckConfig#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#password MonitoringUptimeCheckConfig#password}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.passwordWo"></a>

```go
PasswordWo *string
```

- *Type:* *string

The password to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#password_wo MonitoringUptimeCheckConfig#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.passwordWoVersion"></a>

```go
PasswordWoVersion *string
```

- *Type:* *string

The password write-only version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#password_wo_version MonitoringUptimeCheckConfig#password_wo_version}

---

### MonitoringUptimeCheckConfigHttpCheckPingConfig <a name="MonitoringUptimeCheckConfigHttpCheckPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigHttpCheckPingConfig {
	PingsCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount">PingsCount</a></code> | <code>*f64</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount"></a>

```go
PingsCount *f64
```

- *Type:* *f64

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#pings_count MonitoringUptimeCheckConfig#pings_count}

---

### MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication <a name="MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type">Type</a></code> | <code>*string</code> | The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"]. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#type MonitoringUptimeCheckConfig#type}

---

### MonitoringUptimeCheckConfigMonitoredResource <a name="MonitoringUptimeCheckConfigMonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigMonitoredResource {
	Labels: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Values for all of the labels listed in the associated monitored resource descriptor. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.type">Type</a></code> | <code>*string</code> | The monitored resource type. |

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Values for all of the labels listed in the associated monitored resource descriptor.

For example, Compute Engine VM instances use the labels 'project_id', 'instance_id', and 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#labels MonitoringUptimeCheckConfig#labels}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.type"></a>

```go
Type *string
```

- *Type:* *string

The monitored resource type.

This field must match the type field of a ['MonitoredResourceDescriptor'](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is 'gce_instance'. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#type MonitoringUptimeCheckConfig#type}

---

### MonitoringUptimeCheckConfigResourceGroup <a name="MonitoringUptimeCheckConfigResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigResourceGroup {
	GroupId: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.groupId">GroupId</a></code> | <code>*string</code> | The group of resources being monitored. Should be the 'name' of a group. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.resourceType">ResourceType</a></code> | <code>*string</code> | The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"]. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

The group of resources being monitored. Should be the 'name' of a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#group_id MonitoringUptimeCheckConfig#group_id}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#resource_type MonitoringUptimeCheckConfig#resource_type}

---

### MonitoringUptimeCheckConfigSyntheticMonitor <a name="MonitoringUptimeCheckConfigSyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigSyntheticMonitor {
	CloudFunctionV2: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2">CloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | cloud_function_v2 block. |

---

##### `CloudFunctionV2`<sup>Required</sup> <a name="CloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2"></a>

```go
CloudFunctionV2 MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

cloud_function_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#cloud_function_v2 MonitoringUptimeCheckConfig#cloud_function_v2}

---

### MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 <a name="MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name">Name</a></code> | <code>*string</code> | The fully qualified name of the cloud function resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name"></a>

```go
Name *string
```

- *Type:* *string

The fully qualified name of the cloud function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#name MonitoringUptimeCheckConfig#name}

---

### MonitoringUptimeCheckConfigTcpCheck <a name="MonitoringUptimeCheckConfigTcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigTcpCheck {
	Port: *f64,
	PingConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.port">Port</a></code> | <code>*f64</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | ping_config block. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port to the page to run the check against.

Will be combined with host (specified within the 'monitored_resource') to construct the full URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#port MonitoringUptimeCheckConfig#port}

---

##### `PingConfig`<sup>Optional</sup> <a name="PingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.pingConfig"></a>

```go
PingConfig MonitoringUptimeCheckConfigTcpCheckPingConfig
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#ping_config MonitoringUptimeCheckConfig#ping_config}

---

### MonitoringUptimeCheckConfigTcpCheckPingConfig <a name="MonitoringUptimeCheckConfigTcpCheckPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigTcpCheckPingConfig {
	PingsCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount">PingsCount</a></code> | <code>*f64</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount"></a>

```go
PingsCount *f64
```

- *Type:* *f64

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#pings_count MonitoringUptimeCheckConfig#pings_count}

---

### MonitoringUptimeCheckConfigTimeouts <a name="MonitoringUptimeCheckConfigTimeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

&monitoringuptimecheckconfig.MonitoringUptimeCheckConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#create MonitoringUptimeCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#delete MonitoringUptimeCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#update MonitoringUptimeCheckConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#create MonitoringUptimeCheckConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#delete MonitoringUptimeCheckConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/monitoring_uptime_check_config#update MonitoringUptimeCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference <a name="MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher">ResetJsonMatcher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonMatcher` <a name="ResetJsonMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher"></a>

```go
func ResetJsonMatcher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput">JsonMatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher">JsonMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath">JsonPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonMatcherInput`<sup>Optional</sup> <a name="JsonMatcherInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput"></a>

```go
func JsonMatcherInput() *string
```

- *Type:* *string

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput"></a>

```go
func JsonPathInput() *string
```

- *Type:* *string

---

##### `JsonMatcher`<sup>Required</sup> <a name="JsonMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher"></a>

```go
func JsonMatcher() *string
```

- *Type:* *string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath"></a>

```go
func JsonPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---


### MonitoringUptimeCheckConfigContentMatchersList <a name="MonitoringUptimeCheckConfigContentMatchersList" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigContentMatchersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitoringUptimeCheckConfigContentMatchersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.get"></a>

```go
func Get(index *f64) MonitoringUptimeCheckConfigContentMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringUptimeCheckConfigContentMatchersOutputReference <a name="MonitoringUptimeCheckConfigContentMatchersOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigContentMatchersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitoringUptimeCheckConfigContentMatchersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher">PutJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher">ResetJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher">ResetMatcher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonPathMatcher` <a name="PutJsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher"></a>

```go
func PutJsonPathMatcher(value MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `ResetJsonPathMatcher` <a name="ResetJsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher"></a>

```go
func ResetJsonPathMatcher()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher"></a>

```go
func ResetMatcher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher">JsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput">JsonPathMatcherInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput">MatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher">Matcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonPathMatcher`<sup>Required</sup> <a name="JsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher"></a>

```go
func JsonPathMatcher() MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `JsonPathMatcherInput`<sup>Optional</sup> <a name="JsonPathMatcherInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput"></a>

```go
func JsonPathMatcherInput() MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput"></a>

```go
func MatcherInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher"></a>

```go
func Matcher() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList <a name="MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get"></a>

```go
func Get(index *f64) MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass">ResetStatusClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue">ResetStatusValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatusClass` <a name="ResetStatusClass" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass"></a>

```go
func ResetStatusClass()
```

##### `ResetStatusValue` <a name="ResetStatusValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue"></a>

```go
func ResetStatusValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput">StatusClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput">StatusValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass">StatusClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue">StatusValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusClassInput`<sup>Optional</sup> <a name="StatusClassInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput"></a>

```go
func StatusClassInput() *string
```

- *Type:* *string

---

##### `StatusValueInput`<sup>Optional</sup> <a name="StatusValueInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput"></a>

```go
func StatusValueInput() *f64
```

- *Type:* *f64

---

##### `StatusClass`<sup>Required</sup> <a name="StatusClass" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass"></a>

```go
func StatusClass() *string
```

- *Type:* *string

---

##### `StatusValue`<sup>Required</sup> <a name="StatusValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue"></a>

```go
func StatusValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resetPasswordWo"></a>

```go
func ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resetPasswordWoVersion"></a>

```go
func ResetPasswordWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWoInput"></a>

```go
func PasswordWoInput() *string
```

- *Type:* *string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWoVersionInput"></a>

```go
func PasswordWoVersionInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWo"></a>

```go
func PasswordWo() *string
```

- *Type:* *string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordWoVersion"></a>

```go
func PasswordWoVersion() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigHttpCheckAuthInfo
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---


### MonitoringUptimeCheckConfigHttpCheckOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigHttpCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigHttpCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes">PutAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo">PutAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig">PutPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication">PutServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes">ResetAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo">ResetAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType">ResetCustomContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders">ResetMaskHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig">ResetPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod">ResetRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication">ResetServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl">ResetUseSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl">ResetValidateSsl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceptedResponseStatusCodes` <a name="PutAcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes"></a>

```go
func PutAcceptedResponseStatusCodes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAuthInfo` <a name="PutAuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo"></a>

```go
func PutAuthInfo(value MonitoringUptimeCheckConfigHttpCheckAuthInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `PutPingConfig` <a name="PutPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig"></a>

```go
func PutPingConfig(value MonitoringUptimeCheckConfigHttpCheckPingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `PutServiceAgentAuthentication` <a name="PutServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication"></a>

```go
func PutServiceAgentAuthentication(value MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `ResetAcceptedResponseStatusCodes` <a name="ResetAcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes"></a>

```go
func ResetAcceptedResponseStatusCodes()
```

##### `ResetAuthInfo` <a name="ResetAuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo"></a>

```go
func ResetAuthInfo()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCustomContentType` <a name="ResetCustomContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType"></a>

```go
func ResetCustomContentType()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetMaskHeaders` <a name="ResetMaskHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders"></a>

```go
func ResetMaskHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPingConfig` <a name="ResetPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig"></a>

```go
func ResetPingConfig()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRequestMethod` <a name="ResetRequestMethod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod"></a>

```go
func ResetRequestMethod()
```

##### `ResetServiceAgentAuthentication` <a name="ResetServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication"></a>

```go
func ResetServiceAgentAuthentication()
```

##### `ResetUseSsl` <a name="ResetUseSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl"></a>

```go
func ResetUseSsl()
```

##### `ResetValidateSsl` <a name="ResetValidateSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl"></a>

```go
func ResetValidateSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes">AcceptedResponseStatusCodes</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo">AuthInfo</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication">ServiceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput">AcceptedResponseStatusCodesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput">AuthInfoInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput">CustomContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput">MaskHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput">PingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput">RequestMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput">ServiceAgentAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput">UseSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput">ValidateSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType">CustomContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders">MaskHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl">UseSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl">ValidateSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptedResponseStatusCodes`<sup>Required</sup> <a name="AcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes"></a>

```go
func AcceptedResponseStatusCodes() MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a>

---

##### `AuthInfo`<sup>Required</sup> <a name="AuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo"></a>

```go
func AuthInfo() MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a>

---

##### `PingConfig`<sup>Required</sup> <a name="PingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig"></a>

```go
func PingConfig() MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a>

---

##### `ServiceAgentAuthentication`<sup>Required</sup> <a name="ServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication"></a>

```go
func ServiceAgentAuthentication() MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a>

---

##### `AcceptedResponseStatusCodesInput`<sup>Optional</sup> <a name="AcceptedResponseStatusCodesInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput"></a>

```go
func AcceptedResponseStatusCodesInput() interface{}
```

- *Type:* interface{}

---

##### `AuthInfoInput`<sup>Optional</sup> <a name="AuthInfoInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput"></a>

```go
func AuthInfoInput() MonitoringUptimeCheckConfigHttpCheckAuthInfo
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CustomContentTypeInput`<sup>Optional</sup> <a name="CustomContentTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput"></a>

```go
func CustomContentTypeInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaskHeadersInput`<sup>Optional</sup> <a name="MaskHeadersInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput"></a>

```go
func MaskHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PingConfigInput`<sup>Optional</sup> <a name="PingConfigInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput"></a>

```go
func PingConfigInput() MonitoringUptimeCheckConfigHttpCheckPingConfig
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RequestMethodInput`<sup>Optional</sup> <a name="RequestMethodInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput"></a>

```go
func RequestMethodInput() *string
```

- *Type:* *string

---

##### `ServiceAgentAuthenticationInput`<sup>Optional</sup> <a name="ServiceAgentAuthenticationInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput"></a>

```go
func ServiceAgentAuthenticationInput() MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `UseSslInput`<sup>Optional</sup> <a name="UseSslInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput"></a>

```go
func UseSslInput() interface{}
```

- *Type:* interface{}

---

##### `ValidateSslInput`<sup>Optional</sup> <a name="ValidateSslInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput"></a>

```go
func ValidateSslInput() interface{}
```

- *Type:* interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CustomContentType`<sup>Required</sup> <a name="CustomContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType"></a>

```go
func CustomContentType() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaskHeaders`<sup>Required</sup> <a name="MaskHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders"></a>

```go
func MaskHeaders() interface{}
```

- *Type:* interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod"></a>

```go
func RequestMethod() *string
```

- *Type:* *string

---

##### `UseSsl`<sup>Required</sup> <a name="UseSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl"></a>

```go
func UseSsl() interface{}
```

- *Type:* interface{}

---

##### `ValidateSsl`<sup>Required</sup> <a name="ValidateSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl"></a>

```go
func ValidateSsl() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigHttpCheck
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

---


### MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput">PingsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount">PingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PingsCountInput`<sup>Optional</sup> <a name="PingsCountInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```go
func PingsCountInput() *f64
```

- *Type:* *f64

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount"></a>

```go
func PingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigHttpCheckPingConfig
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---


### MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---


### MonitoringUptimeCheckConfigMonitoredResourceOutputReference <a name="MonitoringUptimeCheckConfigMonitoredResourceOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigMonitoredResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigMonitoredResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigMonitoredResource
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

---


### MonitoringUptimeCheckConfigResourceGroupOutputReference <a name="MonitoringUptimeCheckConfigResourceGroupOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigResourceGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigResourceGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigResourceGroup
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

---


### MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference <a name="MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


### MonitoringUptimeCheckConfigSyntheticMonitorOutputReference <a name="MonitoringUptimeCheckConfigSyntheticMonitorOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigSyntheticMonitorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigSyntheticMonitorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2">PutCloudFunctionV2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudFunctionV2` <a name="PutCloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2"></a>

```go
func PutCloudFunctionV2(value MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2">CloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input">CloudFunctionV2Input</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudFunctionV2`<sup>Required</sup> <a name="CloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2"></a>

```go
func CloudFunctionV2() MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a>

---

##### `CloudFunctionV2Input`<sup>Optional</sup> <a name="CloudFunctionV2Input" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input"></a>

```go
func CloudFunctionV2Input() MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigSyntheticMonitor
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

---


### MonitoringUptimeCheckConfigTcpCheckOutputReference <a name="MonitoringUptimeCheckConfigTcpCheckOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigTcpCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigTcpCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig">PutPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig">ResetPingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPingConfig` <a name="PutPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig"></a>

```go
func PutPingConfig(value MonitoringUptimeCheckConfigTcpCheckPingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `ResetPingConfig` <a name="ResetPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig"></a>

```go
func ResetPingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput">PingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PingConfig`<sup>Required</sup> <a name="PingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig"></a>

```go
func PingConfig() MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a>

---

##### `PingConfigInput`<sup>Optional</sup> <a name="PingConfigInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput"></a>

```go
func PingConfigInput() MonitoringUptimeCheckConfigTcpCheckPingConfig
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigTcpCheck
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

---


### MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference <a name="MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput">PingsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount">PingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PingsCountInput`<sup>Optional</sup> <a name="PingsCountInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```go
func PingsCountInput() *f64
```

- *Type:* *f64

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount"></a>

```go
func PingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringUptimeCheckConfigTcpCheckPingConfig
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---


### MonitoringUptimeCheckConfigTimeoutsOutputReference <a name="MonitoringUptimeCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/monitoringuptimecheckconfig"

monitoringuptimecheckconfig.NewMonitoringUptimeCheckConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringUptimeCheckConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



