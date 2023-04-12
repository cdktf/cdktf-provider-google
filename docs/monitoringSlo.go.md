# `monitoringSlo` Submodule <a name="`monitoringSlo` Submodule" id="@cdktf/provider-google.monitoringSlo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringSlo <a name="MonitoringSlo" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo google_monitoring_slo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSlo(scope Construct, id *string, config MonitoringSloConfig) MonitoringSlo
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig">MonitoringSloConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig">MonitoringSloConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli">PutBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli">PutRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli">PutWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetBasicSli">ResetBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetCalendarPeriod">ResetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRequestBasedSli">ResetRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRollingPeriodDays">ResetRollingPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetSloId">ResetSloId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetUserLabels">ResetUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetWindowsBasedSli">ResetWindowsBasedSli</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBasicSli` <a name="PutBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli"></a>

```go
func PutBasicSli(value MonitoringSloBasicSli)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---

##### `PutRequestBasedSli` <a name="PutRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli"></a>

```go
func PutRequestBasedSli(value MonitoringSloRequestBasedSli)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts"></a>

```go
func PutTimeouts(value MonitoringSloTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

---

##### `PutWindowsBasedSli` <a name="PutWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli"></a>

```go
func PutWindowsBasedSli(value MonitoringSloWindowsBasedSli)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---

##### `ResetBasicSli` <a name="ResetBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetBasicSli"></a>

```go
func ResetBasicSli()
```

##### `ResetCalendarPeriod` <a name="ResetCalendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetCalendarPeriod"></a>

```go
func ResetCalendarPeriod()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRequestBasedSli` <a name="ResetRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRequestBasedSli"></a>

```go
func ResetRequestBasedSli()
```

##### `ResetRollingPeriodDays` <a name="ResetRollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRollingPeriodDays"></a>

```go
func ResetRollingPeriodDays()
```

##### `ResetSloId` <a name="ResetSloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetSloId"></a>

```go
func ResetSloId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetUserLabels"></a>

```go
func ResetUserLabels()
```

##### `ResetWindowsBasedSli` <a name="ResetWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetWindowsBasedSli"></a>

```go
func ResetWindowsBasedSli()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.MonitoringSlo_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.MonitoringSlo_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.MonitoringSlo_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSli">BasicSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference">MonitoringSloBasicSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSli">RequestBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference">MonitoringSloRequestBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference">MonitoringSloTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSli">WindowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference">MonitoringSloWindowsBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSliInput">BasicSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriodInput">CalendarPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goalInput">GoalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSliInput">RequestBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDaysInput">RollingPeriodDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloIdInput">SloIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabelsInput">UserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSliInput">WindowsBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriod">CalendarPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goal">Goal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDays">RollingPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloId">SloId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BasicSli`<sup>Required</sup> <a name="BasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSli"></a>

```go
func BasicSli() MonitoringSloBasicSliOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference">MonitoringSloBasicSliOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestBasedSli`<sup>Required</sup> <a name="RequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSli"></a>

```go
func RequestBasedSli() MonitoringSloRequestBasedSliOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference">MonitoringSloRequestBasedSliOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeouts"></a>

```go
func Timeouts() MonitoringSloTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference">MonitoringSloTimeoutsOutputReference</a>

---

##### `WindowsBasedSli`<sup>Required</sup> <a name="WindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSli"></a>

```go
func WindowsBasedSli() MonitoringSloWindowsBasedSliOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference">MonitoringSloWindowsBasedSliOutputReference</a>

---

##### `BasicSliInput`<sup>Optional</sup> <a name="BasicSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSliInput"></a>

```go
func BasicSliInput() MonitoringSloBasicSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---

##### `CalendarPeriodInput`<sup>Optional</sup> <a name="CalendarPeriodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriodInput"></a>

```go
func CalendarPeriodInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GoalInput`<sup>Optional</sup> <a name="GoalInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goalInput"></a>

```go
func GoalInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RequestBasedSliInput`<sup>Optional</sup> <a name="RequestBasedSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSliInput"></a>

```go
func RequestBasedSliInput() MonitoringSloRequestBasedSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---

##### `RollingPeriodDaysInput`<sup>Optional</sup> <a name="RollingPeriodDaysInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDaysInput"></a>

```go
func RollingPeriodDaysInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SloIdInput`<sup>Optional</sup> <a name="SloIdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloIdInput"></a>

```go
func SloIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabelsInput"></a>

```go
func UserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WindowsBasedSliInput`<sup>Optional</sup> <a name="WindowsBasedSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSliInput"></a>

```go
func WindowsBasedSliInput() MonitoringSloWindowsBasedSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---

##### `CalendarPeriod`<sup>Required</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriod"></a>

```go
func CalendarPeriod() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goal"></a>

```go
func Goal() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RollingPeriodDays`<sup>Required</sup> <a name="RollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDays"></a>

```go
func RollingPeriodDays() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `SloId`<sup>Required</sup> <a name="SloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloId"></a>

```go
func SloId() *string
```

- *Type:* *string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabels"></a>

```go
func UserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringSloBasicSli <a name="MonitoringSloBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloBasicSli {
	Availability: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloBasicSliAvailability,
	Latency: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloBasicSliLatency,
	Location: *[]*string,
	Method: *[]*string,
	Version: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.location">Location</a></code> | <code>*[]*string</code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.method">Method</a></code> | <code>*[]*string</code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.version">Version</a></code> | <code>*[]*string</code> | The set of API versions to which this SLI is relevant. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.availability"></a>

```go
Availability MonitoringSloBasicSliAvailability
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#availability MonitoringSlo#availability}

---

##### `Latency`<sup>Optional</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.latency"></a>

```go
Latency MonitoringSloBasicSliLatency
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

latency block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#latency MonitoringSlo#latency}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.location"></a>

```go
Location *[]*string
```

- *Type:* *[]*string

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#location MonitoringSlo#location}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.method"></a>

```go
Method *[]*string
```

- *Type:* *[]*string

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#method MonitoringSlo#method}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.version"></a>

```go
Version *[]*string
```

- *Type:* *[]*string

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#version MonitoringSlo#version}

---

### MonitoringSloBasicSliAvailability <a name="MonitoringSloBasicSliAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloBasicSliAvailability {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#enabled MonitoringSlo#enabled}

---

### MonitoringSloBasicSliLatency <a name="MonitoringSloBasicSliLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloBasicSliLatency {
	Threshold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.property.threshold">Threshold</a></code> | <code>*string</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.property.threshold"></a>

```go
Threshold *string
```

- *Type:* *string

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloConfig <a name="MonitoringSloConfig" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Goal: *f64,
	Service: *string,
	BasicSli: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloBasicSli,
	CalendarPeriod: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	RequestBasedSli: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloRequestBasedSli,
	RollingPeriodDays: *f64,
	SloId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloTimeouts,
	UserLabels: *map[string]*string,
	WindowsBasedSli: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSli,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.goal">Goal</a></code> | <code>*f64</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.service">Service</a></code> | <code>*string</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.basicSli">BasicSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.calendarPeriod">CalendarPeriod</a></code> | <code>*string</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#id MonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#project MonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.requestBasedSli">RequestBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.rollingPeriodDays">RollingPeriodDays</a></code> | <code>*f64</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.sloId">SloId</a></code> | <code>*string</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.windowsBasedSli">WindowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.goal"></a>

```go
Goal *f64
```

- *Type:* *f64

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#goal MonitoringSlo#goal}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#service MonitoringSlo#service}

---

##### `BasicSli`<sup>Optional</sup> <a name="BasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.basicSli"></a>

```go
BasicSli MonitoringSloBasicSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#basic_sli MonitoringSlo#basic_sli}

---

##### `CalendarPeriod`<sup>Optional</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.calendarPeriod"></a>

```go
CalendarPeriod *string
```

- *Type:* *string

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#calendar_period MonitoringSlo#calendar_period}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#display_name MonitoringSlo#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#id MonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#project MonitoringSlo#project}.

---

##### `RequestBasedSli`<sup>Optional</sup> <a name="RequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.requestBasedSli"></a>

```go
RequestBasedSli MonitoringSloRequestBasedSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#request_based_sli MonitoringSlo#request_based_sli}

---

##### `RollingPeriodDays`<sup>Optional</sup> <a name="RollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.rollingPeriodDays"></a>

```go
RollingPeriodDays *f64
```

- *Type:* *f64

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#rolling_period_days MonitoringSlo#rolling_period_days}

---

##### `SloId`<sup>Optional</sup> <a name="SloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.sloId"></a>

```go
SloId *string
```

- *Type:* *string

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#slo_id MonitoringSlo#slo_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.timeouts"></a>

```go
Timeouts MonitoringSloTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#timeouts MonitoringSlo#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.userLabels"></a>

```go
UserLabels *map[string]*string
```

- *Type:* *map[string]*string

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#user_labels MonitoringSlo#user_labels}

---

##### `WindowsBasedSli`<sup>Optional</sup> <a name="WindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.windowsBasedSli"></a>

```go
WindowsBasedSli MonitoringSloWindowsBasedSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#windows_based_sli MonitoringSlo#windows_based_sli}

---

### MonitoringSloRequestBasedSli <a name="MonitoringSloRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloRequestBasedSli {
	DistributionCut: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut,
	GoodTotalRatio: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `DistributionCut`<sup>Optional</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.distributionCut"></a>

```go
DistributionCut MonitoringSloRequestBasedSliDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}

---

##### `GoodTotalRatio`<sup>Optional</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.goodTotalRatio"></a>

```go
GoodTotalRatio MonitoringSloRequestBasedSliGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}

---

### MonitoringSloRequestBasedSliDistributionCut <a name="MonitoringSloRequestBasedSliDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloRequestBasedSliDistributionCut {
	DistributionFilter: *string,
	Range: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.distributionFilter">DistributionFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | range block. |

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.distributionFilter"></a>

```go
DistributionFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.range"></a>

```go
Range MonitoringSloRequestBasedSliDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}

---

### MonitoringSloRequestBasedSliDistributionCutRange <a name="MonitoringSloRequestBasedSliDistributionCutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloRequestBasedSliDistributionCutRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.max">Max</a></code> | <code>*f64</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.min">Min</a></code> | <code>*f64</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloRequestBasedSliGoodTotalRatio <a name="MonitoringSloRequestBasedSliGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloRequestBasedSliGoodTotalRatio {
	BadServiceFilter: *string,
	GoodServiceFilter: *string,
	TotalServiceFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter">BadServiceFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. |

---

##### `BadServiceFilter`<sup>Optional</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter"></a>

```go
BadServiceFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}

---

##### `GoodServiceFilter`<sup>Optional</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter"></a>

```go
GoodServiceFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}

---

##### `TotalServiceFilter`<sup>Optional</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter"></a>

```go
TotalServiceFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}

---

### MonitoringSloTimeouts <a name="MonitoringSloTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#create MonitoringSlo#create}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#delete MonitoringSlo#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#update MonitoringSlo#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#create MonitoringSlo#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#delete MonitoringSlo#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#update MonitoringSlo#update}.

---

### MonitoringSloWindowsBasedSli <a name="MonitoringSloWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSli {
	GoodBadMetricFilter: *string,
	GoodTotalRatioThreshold: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold,
	MetricMeanInRange: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange,
	MetricSumInRange: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange,
	WindowPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodBadMetricFilter">GoodBadMetricFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold">GoodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | good_total_ratio_threshold block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricMeanInRange">MetricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | metric_mean_in_range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricSumInRange">MetricSumInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | metric_sum_in_range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.windowPeriod">WindowPeriod</a></code> | <code>*string</code> | Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds. |

---

##### `GoodBadMetricFilter`<sup>Optional</sup> <a name="GoodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodBadMetricFilter"></a>

```go
GoodBadMetricFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_bad_metric_filter MonitoringSlo#good_bad_metric_filter}

---

##### `GoodTotalRatioThreshold`<sup>Optional</sup> <a name="GoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold"></a>

```go
GoodTotalRatioThreshold MonitoringSloWindowsBasedSliGoodTotalRatioThreshold
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

good_total_ratio_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_total_ratio_threshold MonitoringSlo#good_total_ratio_threshold}

---

##### `MetricMeanInRange`<sup>Optional</sup> <a name="MetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricMeanInRange"></a>

```go
MetricMeanInRange MonitoringSloWindowsBasedSliMetricMeanInRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

metric_mean_in_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#metric_mean_in_range MonitoringSlo#metric_mean_in_range}

---

##### `MetricSumInRange`<sup>Optional</sup> <a name="MetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricSumInRange"></a>

```go
MetricSumInRange MonitoringSloWindowsBasedSliMetricSumInRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

metric_sum_in_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#metric_sum_in_range MonitoringSlo#metric_sum_in_range}

---

##### `WindowPeriod`<sup>Optional</sup> <a name="WindowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.windowPeriod"></a>

```go
WindowPeriod *string
```

- *Type:* *string

Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds.

Must be an
integer fraction of a day and at least 60s.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#window_period MonitoringSlo#window_period}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThreshold <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold {
	BasicSliPerformance: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance,
	Performance: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance">BasicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | basic_sli_performance block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance">Performance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | performance block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold">Threshold</a></code> | <code>*f64</code> | If window performance >= threshold, the window is counted as good. |

---

##### `BasicSliPerformance`<sup>Optional</sup> <a name="BasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance"></a>

```go
BasicSliPerformance MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

basic_sli_performance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#basic_sli_performance MonitoringSlo#basic_sli_performance}

---

##### `Performance`<sup>Optional</sup> <a name="Performance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance"></a>

```go
Performance MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

performance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#performance MonitoringSlo#performance}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

If window performance >= threshold, the window is counted as good.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
	Availability: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability,
	Latency: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency,
	Location: *[]*string,
	Method: *[]*string,
	Version: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location">Location</a></code> | <code>*[]*string</code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method">Method</a></code> | <code>*[]*string</code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version">Version</a></code> | <code>*[]*string</code> | The set of API versions to which this SLI is relevant. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability"></a>

```go
Availability MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#availability MonitoringSlo#availability}

---

##### `Latency`<sup>Optional</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency"></a>

```go
Latency MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

latency block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#latency MonitoringSlo#latency}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location"></a>

```go
Location *[]*string
```

- *Type:* *[]*string

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#location MonitoringSlo#location}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method"></a>

```go
Method *[]*string
```

- *Type:* *[]*string

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#method MonitoringSlo#method}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version"></a>

```go
Version *[]*string
```

- *Type:* *[]*string

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#version MonitoringSlo#version}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#enabled MonitoringSlo#enabled}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
	Threshold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold">Threshold</a></code> | <code>*string</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold"></a>

```go
Threshold *string
```

- *Type:* *string

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance {
	DistributionCut: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut,
	GoodTotalRatio: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `DistributionCut`<sup>Optional</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut"></a>

```go
DistributionCut MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}

---

##### `GoodTotalRatio`<sup>Optional</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio"></a>

```go
GoodTotalRatio MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
	DistributionFilter: *string,
	Range: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter">DistributionFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | range block. |

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter"></a>

```go
DistributionFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range"></a>

```go
Range MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max">Max</a></code> | <code>*f64</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min">Min</a></code> | <code>*f64</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio {
	BadServiceFilter: *string,
	GoodServiceFilter: *string,
	TotalServiceFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter">BadServiceFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>*string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |

---

##### `BadServiceFilter`<sup>Optional</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter"></a>

```go
BadServiceFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}

---

##### `GoodServiceFilter`<sup>Optional</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter"></a>

```go
GoodServiceFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}

---

##### `TotalServiceFilter`<sup>Optional</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter"></a>

```go
TotalServiceFilter *string
```

- *Type:* *string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}

---

### MonitoringSloWindowsBasedSliMetricMeanInRange <a name="MonitoringSloWindowsBasedSliMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliMetricMeanInRange {
	Range: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange,
	TimeSeries: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries">TimeSeries</a></code> | <code>*string</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.range"></a>

```go
Range MonitoringSloWindowsBasedSliMetricMeanInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries"></a>

```go
TimeSeries *string
```

- *Type:* *string

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#time_series MonitoringSlo#time_series}

---

### MonitoringSloWindowsBasedSliMetricMeanInRangeRange <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max">Max</a></code> | <code>*f64</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min">Min</a></code> | <code>*f64</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloWindowsBasedSliMetricSumInRange <a name="MonitoringSloWindowsBasedSliMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliMetricSumInRange {
	Range: github.com/cdktf/cdktf-provider-google-go/google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange,
	TimeSeries: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries">TimeSeries</a></code> | <code>*string</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.range"></a>

```go
Range MonitoringSloWindowsBasedSliMetricSumInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries"></a>

```go
TimeSeries *string
```

- *Type:* *string

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#time_series MonitoringSlo#time_series}

---

### MonitoringSloWindowsBasedSliMetricSumInRangeRange <a name="MonitoringSloWindowsBasedSliMetricSumInRangeRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

&monitoringslo.MonitoringSloWindowsBasedSliMetricSumInRangeRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max">Max</a></code> | <code>*f64</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min">Min</a></code> | <code>*f64</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringSloBasicSliAvailabilityOutputReference <a name="MonitoringSloBasicSliAvailabilityOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloBasicSliAvailabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloBasicSliAvailabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloBasicSliAvailability
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---


### MonitoringSloBasicSliLatencyOutputReference <a name="MonitoringSloBasicSliLatencyOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloBasicSliLatencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloBasicSliLatencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloBasicSliLatency
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---


### MonitoringSloBasicSliOutputReference <a name="MonitoringSloBasicSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloBasicSliOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloBasicSliOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability">PutAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency">PutLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLatency">ResetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailability` <a name="PutAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability"></a>

```go
func PutAvailability(value MonitoringSloBasicSliAvailability)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---

##### `PutLatency` <a name="PutLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency"></a>

```go
func PutLatency(value MonitoringSloBasicSliLatency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetLatency` <a name="ResetLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLatency"></a>

```go
func ResetLatency()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference">MonitoringSloBasicSliAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference">MonitoringSloBasicSliLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latencyInput">LatencyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.locationInput">LocationInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.methodInput">MethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.versionInput">VersionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.location">Location</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.method">Method</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.version">Version</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availability"></a>

```go
func Availability() MonitoringSloBasicSliAvailabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference">MonitoringSloBasicSliAvailabilityOutputReference</a>

---

##### `Latency`<sup>Required</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latency"></a>

```go
func Latency() MonitoringSloBasicSliLatencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference">MonitoringSloBasicSliLatencyOutputReference</a>

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() MonitoringSloBasicSliAvailability
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---

##### `LatencyInput`<sup>Optional</sup> <a name="LatencyInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latencyInput"></a>

```go
func LatencyInput() MonitoringSloBasicSliLatency
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.locationInput"></a>

```go
func LocationInput() *[]*string
```

- *Type:* *[]*string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.methodInput"></a>

```go
func MethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.versionInput"></a>

```go
func VersionInput() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.location"></a>

```go
func Location() *[]*string
```

- *Type:* *[]*string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.method"></a>

```go
func Method() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.version"></a>

```go
func Version() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloBasicSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---


### MonitoringSloRequestBasedSliDistributionCutOutputReference <a name="MonitoringSloRequestBasedSliDistributionCutOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloRequestBasedSliDistributionCutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloRequestBasedSliDistributionCutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange"></a>

```go
func PutRange(value MonitoringSloRequestBasedSliDistributionCutRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference">MonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput">DistributionFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter">DistributionFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.range"></a>

```go
func Range() MonitoringSloRequestBasedSliDistributionCutRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference">MonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a>

---

##### `DistributionFilterInput`<sup>Optional</sup> <a name="DistributionFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput"></a>

```go
func DistributionFilterInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput"></a>

```go
func RangeInput() MonitoringSloRequestBasedSliDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter"></a>

```go
func DistributionFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloRequestBasedSliDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---


### MonitoringSloRequestBasedSliDistributionCutRangeOutputReference <a name="MonitoringSloRequestBasedSliDistributionCutRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloRequestBasedSliDistributionCutRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloRequestBasedSliDistributionCutRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloRequestBasedSliDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---


### MonitoringSloRequestBasedSliGoodTotalRatioOutputReference <a name="MonitoringSloRequestBasedSliGoodTotalRatioOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloRequestBasedSliGoodTotalRatioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloRequestBasedSliGoodTotalRatioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter">ResetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter">ResetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter">ResetTotalServiceFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBadServiceFilter` <a name="ResetBadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```go
func ResetBadServiceFilter()
```

##### `ResetGoodServiceFilter` <a name="ResetGoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```go
func ResetGoodServiceFilter()
```

##### `ResetTotalServiceFilter` <a name="ResetTotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```go
func ResetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput">BadServiceFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput">GoodServiceFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput">TotalServiceFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter">BadServiceFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BadServiceFilterInput`<sup>Optional</sup> <a name="BadServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```go
func BadServiceFilterInput() *string
```

- *Type:* *string

---

##### `GoodServiceFilterInput`<sup>Optional</sup> <a name="GoodServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```go
func GoodServiceFilterInput() *string
```

- *Type:* *string

---

##### `TotalServiceFilterInput`<sup>Optional</sup> <a name="TotalServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```go
func TotalServiceFilterInput() *string
```

- *Type:* *string

---

##### `BadServiceFilter`<sup>Required</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```go
func BadServiceFilter() *string
```

- *Type:* *string

---

##### `GoodServiceFilter`<sup>Required</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```go
func GoodServiceFilter() *string
```

- *Type:* *string

---

##### `TotalServiceFilter`<sup>Required</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```go
func TotalServiceFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloRequestBasedSliGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---


### MonitoringSloRequestBasedSliOutputReference <a name="MonitoringSloRequestBasedSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloRequestBasedSliOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloRequestBasedSliOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut">PutDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio">PutGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetDistributionCut">ResetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio">ResetGoodTotalRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDistributionCut` <a name="PutDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut"></a>

```go
func PutDistributionCut(value MonitoringSloRequestBasedSliDistributionCut)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---

##### `PutGoodTotalRatio` <a name="PutGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio"></a>

```go
func PutGoodTotalRatio(value MonitoringSloRequestBasedSliGoodTotalRatio)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `ResetDistributionCut` <a name="ResetDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetDistributionCut"></a>

```go
func ResetDistributionCut()
```

##### `ResetGoodTotalRatio` <a name="ResetGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio"></a>

```go
func ResetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference">MonitoringSloRequestBasedSliDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference">MonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCutInput">DistributionCutInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput">GoodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DistributionCut`<sup>Required</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCut"></a>

```go
func DistributionCut() MonitoringSloRequestBasedSliDistributionCutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference">MonitoringSloRequestBasedSliDistributionCutOutputReference</a>

---

##### `GoodTotalRatio`<sup>Required</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio"></a>

```go
func GoodTotalRatio() MonitoringSloRequestBasedSliGoodTotalRatioOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference">MonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a>

---

##### `DistributionCutInput`<sup>Optional</sup> <a name="DistributionCutInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCutInput"></a>

```go
func DistributionCutInput() MonitoringSloRequestBasedSliDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---

##### `GoodTotalRatioInput`<sup>Optional</sup> <a name="GoodTotalRatioInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput"></a>

```go
func GoodTotalRatioInput() MonitoringSloRequestBasedSliGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloRequestBasedSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---


### MonitoringSloTimeoutsOutputReference <a name="MonitoringSloTimeoutsOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability">PutAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency">PutLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency">ResetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailability` <a name="PutAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability"></a>

```go
func PutAvailability(value MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `PutLatency` <a name="PutLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency"></a>

```go
func PutLatency(value MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetLatency` <a name="ResetLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency"></a>

```go
func ResetLatency()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput">LatencyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput">LocationInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput">MethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput">VersionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location">Location</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method">Method</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version">Version</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability"></a>

```go
func Availability() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a>

---

##### `Latency`<sup>Required</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency"></a>

```go
func Latency() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a>

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `LatencyInput`<sup>Optional</sup> <a name="LatencyInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput"></a>

```go
func LatencyInput() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput"></a>

```go
func LocationInput() *[]*string
```

- *Type:* *[]*string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput"></a>

```go
func MethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput"></a>

```go
func VersionInput() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location"></a>

```go
func Location() *[]*string
```

- *Type:* *[]*string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method"></a>

```go
func Method() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version"></a>

```go
func Version() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance">PutBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance">PutPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance">ResetBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance">ResetPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicSliPerformance` <a name="PutBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance"></a>

```go
func PutBasicSliPerformance(value MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `PutPerformance` <a name="PutPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance"></a>

```go
func PutPerformance(value MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `ResetBasicSliPerformance` <a name="ResetBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance"></a>

```go
func ResetBasicSliPerformance()
```

##### `ResetPerformance` <a name="ResetPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance"></a>

```go
func ResetPerformance()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance">BasicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance">Performance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput">BasicSliPerformanceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput">PerformanceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicSliPerformance`<sup>Required</sup> <a name="BasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance"></a>

```go
func BasicSliPerformance() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a>

---

##### `Performance`<sup>Required</sup> <a name="Performance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance"></a>

```go
func Performance() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a>

---

##### `BasicSliPerformanceInput`<sup>Optional</sup> <a name="BasicSliPerformanceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput"></a>

```go
func BasicSliPerformanceInput() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `PerformanceInput`<sup>Optional</sup> <a name="PerformanceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput"></a>

```go
func PerformanceInput() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThreshold
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange"></a>

```go
func PutRange(value MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput">DistributionFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter">DistributionFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range"></a>

```go
func Range() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a>

---

##### `DistributionFilterInput`<sup>Optional</sup> <a name="DistributionFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput"></a>

```go
func DistributionFilterInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput"></a>

```go
func RangeInput() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter"></a>

```go
func DistributionFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter">ResetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter">ResetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter">ResetTotalServiceFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBadServiceFilter` <a name="ResetBadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```go
func ResetBadServiceFilter()
```

##### `ResetGoodServiceFilter` <a name="ResetGoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```go
func ResetGoodServiceFilter()
```

##### `ResetTotalServiceFilter` <a name="ResetTotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```go
func ResetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput">BadServiceFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput">GoodServiceFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput">TotalServiceFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter">BadServiceFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BadServiceFilterInput`<sup>Optional</sup> <a name="BadServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```go
func BadServiceFilterInput() *string
```

- *Type:* *string

---

##### `GoodServiceFilterInput`<sup>Optional</sup> <a name="GoodServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```go
func GoodServiceFilterInput() *string
```

- *Type:* *string

---

##### `TotalServiceFilterInput`<sup>Optional</sup> <a name="TotalServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```go
func TotalServiceFilterInput() *string
```

- *Type:* *string

---

##### `BadServiceFilter`<sup>Required</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```go
func BadServiceFilter() *string
```

- *Type:* *string

---

##### `GoodServiceFilter`<sup>Required</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```go
func GoodServiceFilter() *string
```

- *Type:* *string

---

##### `TotalServiceFilter`<sup>Required</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```go
func TotalServiceFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut">PutDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio">PutGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut">ResetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio">ResetGoodTotalRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDistributionCut` <a name="PutDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut"></a>

```go
func PutDistributionCut(value MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `PutGoodTotalRatio` <a name="PutGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio"></a>

```go
func PutGoodTotalRatio(value MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `ResetDistributionCut` <a name="ResetDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut"></a>

```go
func ResetDistributionCut()
```

##### `ResetGoodTotalRatio` <a name="ResetGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio"></a>

```go
func ResetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput">DistributionCutInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput">GoodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DistributionCut`<sup>Required</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut"></a>

```go
func DistributionCut() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a>

---

##### `GoodTotalRatio`<sup>Required</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio"></a>

```go
func GoodTotalRatio() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a>

---

##### `DistributionCutInput`<sup>Optional</sup> <a name="DistributionCutInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput"></a>

```go
func DistributionCutInput() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `GoodTotalRatioInput`<sup>Optional</sup> <a name="GoodTotalRatioInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput"></a>

```go
func GoodTotalRatioInput() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---


### MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange"></a>

```go
func PutRange(value MonitoringSloWindowsBasedSliMetricMeanInRangeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries">TimeSeries</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range"></a>

```go
func Range() MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput"></a>

```go
func RangeInput() MonitoringSloWindowsBasedSliMetricMeanInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput"></a>

```go
func TimeSeriesInput() *string
```

- *Type:* *string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries"></a>

```go
func TimeSeries() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliMetricMeanInRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---


### MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliMetricMeanInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


### MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange"></a>

```go
func PutRange(value MonitoringSloWindowsBasedSliMetricSumInRangeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries">TimeSeries</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range"></a>

```go
func Range() MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput"></a>

```go
func RangeInput() MonitoringSloWindowsBasedSliMetricSumInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput"></a>

```go
func TimeSeriesInput() *string
```

- *Type:* *string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries"></a>

```go
func TimeSeries() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliMetricSumInRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---


### MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSliMetricSumInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


### MonitoringSloWindowsBasedSliOutputReference <a name="MonitoringSloWindowsBasedSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringslo"

monitoringslo.NewMonitoringSloWindowsBasedSliOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringSloWindowsBasedSliOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold">PutGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange">PutMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange">PutMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter">ResetGoodBadMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold">ResetGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange">ResetMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange">ResetMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod">ResetWindowPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoodTotalRatioThreshold` <a name="PutGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold"></a>

```go
func PutGoodTotalRatioThreshold(value MonitoringSloWindowsBasedSliGoodTotalRatioThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `PutMetricMeanInRange` <a name="PutMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange"></a>

```go
func PutMetricMeanInRange(value MonitoringSloWindowsBasedSliMetricMeanInRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `PutMetricSumInRange` <a name="PutMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange"></a>

```go
func PutMetricSumInRange(value MonitoringSloWindowsBasedSliMetricSumInRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `ResetGoodBadMetricFilter` <a name="ResetGoodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter"></a>

```go
func ResetGoodBadMetricFilter()
```

##### `ResetGoodTotalRatioThreshold` <a name="ResetGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold"></a>

```go
func ResetGoodTotalRatioThreshold()
```

##### `ResetMetricMeanInRange` <a name="ResetMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange"></a>

```go
func ResetMetricMeanInRange()
```

##### `ResetMetricSumInRange` <a name="ResetMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange"></a>

```go
func ResetMetricSumInRange()
```

##### `ResetWindowPeriod` <a name="ResetWindowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod"></a>

```go
func ResetWindowPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold">GoodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange">MetricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange">MetricSumInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput">GoodBadMetricFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput">GoodTotalRatioThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput">MetricMeanInRangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput">MetricSumInRangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput">WindowPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter">GoodBadMetricFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriod">WindowPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoodTotalRatioThreshold`<sup>Required</sup> <a name="GoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold"></a>

```go
func GoodTotalRatioThreshold() MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a>

---

##### `MetricMeanInRange`<sup>Required</sup> <a name="MetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange"></a>

```go
func MetricMeanInRange() MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a>

---

##### `MetricSumInRange`<sup>Required</sup> <a name="MetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange"></a>

```go
func MetricSumInRange() MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a>

---

##### `GoodBadMetricFilterInput`<sup>Optional</sup> <a name="GoodBadMetricFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput"></a>

```go
func GoodBadMetricFilterInput() *string
```

- *Type:* *string

---

##### `GoodTotalRatioThresholdInput`<sup>Optional</sup> <a name="GoodTotalRatioThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput"></a>

```go
func GoodTotalRatioThresholdInput() MonitoringSloWindowsBasedSliGoodTotalRatioThreshold
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `MetricMeanInRangeInput`<sup>Optional</sup> <a name="MetricMeanInRangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput"></a>

```go
func MetricMeanInRangeInput() MonitoringSloWindowsBasedSliMetricMeanInRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `MetricSumInRangeInput`<sup>Optional</sup> <a name="MetricSumInRangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput"></a>

```go
func MetricSumInRangeInput() MonitoringSloWindowsBasedSliMetricSumInRange
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `WindowPeriodInput`<sup>Optional</sup> <a name="WindowPeriodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput"></a>

```go
func WindowPeriodInput() *string
```

- *Type:* *string

---

##### `GoodBadMetricFilter`<sup>Required</sup> <a name="GoodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter"></a>

```go
func GoodBadMetricFilter() *string
```

- *Type:* *string

---

##### `WindowPeriod`<sup>Required</sup> <a name="WindowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriod"></a>

```go
func WindowPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringSloWindowsBasedSli
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---



