# `osConfigPatchDeployment` Submodule <a name="`osConfigPatchDeployment` Submodule" id="@cdktf/provider-google.osConfigPatchDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsConfigPatchDeployment <a name="OsConfigPatchDeployment" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment google_os_config_patch_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeployment(scope Construct, id *string, config OsConfigPatchDeploymentConfig) OsConfigPatchDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig">OsConfigPatchDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig">OsConfigPatchDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter">PutInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule">PutOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig">PutPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule">PutRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout">PutRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOneTimeSchedule">ResetOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetPatchConfig">ResetPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRecurringSchedule">ResetRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRollout">ResetRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInstanceFilter` <a name="PutInstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter"></a>

```go
func PutInstanceFilter(value OsConfigPatchDeploymentInstanceFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---

##### `PutOneTimeSchedule` <a name="PutOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule"></a>

```go
func PutOneTimeSchedule(value OsConfigPatchDeploymentOneTimeSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `PutPatchConfig` <a name="PutPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig"></a>

```go
func PutPatchConfig(value OsConfigPatchDeploymentPatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---

##### `PutRecurringSchedule` <a name="PutRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule"></a>

```go
func PutRecurringSchedule(value OsConfigPatchDeploymentRecurringSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---

##### `PutRollout` <a name="PutRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout"></a>

```go
func PutRollout(value OsConfigPatchDeploymentRollout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts"></a>

```go
func PutTimeouts(value OsConfigPatchDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetOneTimeSchedule` <a name="ResetOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOneTimeSchedule"></a>

```go
func ResetOneTimeSchedule()
```

##### `ResetPatchConfig` <a name="ResetPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetPatchConfig"></a>

```go
func ResetPatchConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRecurringSchedule` <a name="ResetRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRecurringSchedule"></a>

```go
func ResetRecurringSchedule()
```

##### `ResetRollout` <a name="ResetRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRollout"></a>

```go
func ResetRollout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.OsConfigPatchDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.OsConfigPatchDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.OsConfigPatchDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilter">InstanceFilter</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference">OsConfigPatchDeploymentInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lastExecuteTime">LastExecuteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference">OsConfigPatchDeploymentOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfig">PatchConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference">OsConfigPatchDeploymentPatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference">OsConfigPatchDeploymentRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rollout">Rollout</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference">OsConfigPatchDeploymentRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference">OsConfigPatchDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilterInput">InstanceFilterInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeScheduleInput">OneTimeScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfigInput">PatchConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentIdInput">PatchDeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringScheduleInput">RecurringScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentId">PatchDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `InstanceFilter`<sup>Required</sup> <a name="InstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilter"></a>

```go
func InstanceFilter() OsConfigPatchDeploymentInstanceFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference">OsConfigPatchDeploymentInstanceFilterOutputReference</a>

---

##### `LastExecuteTime`<sup>Required</sup> <a name="LastExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lastExecuteTime"></a>

```go
func LastExecuteTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OneTimeSchedule`<sup>Required</sup> <a name="OneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeSchedule"></a>

```go
func OneTimeSchedule() OsConfigPatchDeploymentOneTimeScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference">OsConfigPatchDeploymentOneTimeScheduleOutputReference</a>

---

##### `PatchConfig`<sup>Required</sup> <a name="PatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfig"></a>

```go
func PatchConfig() OsConfigPatchDeploymentPatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference">OsConfigPatchDeploymentPatchConfigOutputReference</a>

---

##### `RecurringSchedule`<sup>Required</sup> <a name="RecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringSchedule"></a>

```go
func RecurringSchedule() OsConfigPatchDeploymentRecurringScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference">OsConfigPatchDeploymentRecurringScheduleOutputReference</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rollout"></a>

```go
func Rollout() OsConfigPatchDeploymentRolloutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference">OsConfigPatchDeploymentRolloutOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeouts"></a>

```go
func Timeouts() OsConfigPatchDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference">OsConfigPatchDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceFilterInput`<sup>Optional</sup> <a name="InstanceFilterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilterInput"></a>

```go
func InstanceFilterInput() OsConfigPatchDeploymentInstanceFilter
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---

##### `OneTimeScheduleInput`<sup>Optional</sup> <a name="OneTimeScheduleInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeScheduleInput"></a>

```go
func OneTimeScheduleInput() OsConfigPatchDeploymentOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `PatchConfigInput`<sup>Optional</sup> <a name="PatchConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfigInput"></a>

```go
func PatchConfigInput() OsConfigPatchDeploymentPatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---

##### `PatchDeploymentIdInput`<sup>Optional</sup> <a name="PatchDeploymentIdInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentIdInput"></a>

```go
func PatchDeploymentIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RecurringScheduleInput`<sup>Optional</sup> <a name="RecurringScheduleInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringScheduleInput"></a>

```go
func RecurringScheduleInput() OsConfigPatchDeploymentRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---

##### `RolloutInput`<sup>Optional</sup> <a name="RolloutInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rolloutInput"></a>

```go
func RolloutInput() OsConfigPatchDeploymentRollout
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PatchDeploymentId`<sup>Required</sup> <a name="PatchDeploymentId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentId"></a>

```go
func PatchDeploymentId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsConfigPatchDeploymentConfig <a name="OsConfigPatchDeploymentConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceFilter: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter,
	PatchDeploymentId: *string,
	Description: *string,
	Duration: *string,
	Id: *string,
	OneTimeSchedule: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule,
	PatchConfig: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig,
	Project: *string,
	RecurringSchedule: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule,
	Rollout: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.instanceFilter">InstanceFilter</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | instance_filter block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchDeploymentId">PatchDeploymentId</a></code> | <code>*string</code> | A name for the patch deployment in the project. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.description">Description</a></code> | <code>*string</code> | Description of the patch deployment. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.duration">Duration</a></code> | <code>*string</code> | Duration of the patch. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#id OsConfigPatchDeployment#id}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchConfig">PatchConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | patch_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#project OsConfigPatchDeployment#project}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | recurring_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.rollout">Rollout</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | rollout block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceFilter`<sup>Required</sup> <a name="InstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.instanceFilter"></a>

```go
InstanceFilter OsConfigPatchDeploymentInstanceFilter
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

instance_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#instance_filter OsConfigPatchDeployment#instance_filter}

---

##### `PatchDeploymentId`<sup>Required</sup> <a name="PatchDeploymentId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchDeploymentId"></a>

```go
PatchDeploymentId *string
```

- *Type:* *string

A name for the patch deployment in the project.

When creating a name the following rules apply:
Must contain only lowercase letters, numbers, and hyphens.
Must start with a letter.
Must be between 1-63 characters.
Must end with a number or a letter.
Must be unique within the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#patch_deployment_id OsConfigPatchDeployment#patch_deployment_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the patch deployment. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#description OsConfigPatchDeployment#description}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Duration of the patch.

After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#duration OsConfigPatchDeployment#duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#id OsConfigPatchDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OneTimeSchedule`<sup>Optional</sup> <a name="OneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.oneTimeSchedule"></a>

```go
OneTimeSchedule OsConfigPatchDeploymentOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#one_time_schedule OsConfigPatchDeployment#one_time_schedule}

---

##### `PatchConfig`<sup>Optional</sup> <a name="PatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchConfig"></a>

```go
PatchConfig OsConfigPatchDeploymentPatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

patch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#patch_config OsConfigPatchDeployment#patch_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#project OsConfigPatchDeployment#project}.

---

##### `RecurringSchedule`<sup>Optional</sup> <a name="RecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.recurringSchedule"></a>

```go
RecurringSchedule OsConfigPatchDeploymentRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#recurring_schedule OsConfigPatchDeployment#recurring_schedule}

---

##### `Rollout`<sup>Optional</sup> <a name="Rollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.rollout"></a>

```go
Rollout OsConfigPatchDeploymentRollout
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

rollout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#rollout OsConfigPatchDeployment#rollout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.timeouts"></a>

```go
Timeouts OsConfigPatchDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#timeouts OsConfigPatchDeployment#timeouts}

---

### OsConfigPatchDeploymentInstanceFilter <a name="OsConfigPatchDeploymentInstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentInstanceFilter {
	All: interface{},
	GroupLabels: interface{},
	InstanceNamePrefixes: *[]*string,
	Instances: *[]*string,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.all">All</a></code> | <code>interface{}</code> | Target all VM instances in the project. If true, no other criteria is permitted. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.groupLabels">GroupLabels</a></code> | <code>interface{}</code> | group_labels block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>*[]*string</code> | Targets VMs whose name starts with one of these prefixes. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instances">Instances</a></code> | <code>*[]*string</code> | Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.zones">Zones</a></code> | <code>*[]*string</code> | Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

Target all VM instances in the project. If true, no other criteria is permitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#all OsConfigPatchDeployment#all}

---

##### `GroupLabels`<sup>Optional</sup> <a name="GroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.groupLabels"></a>

```go
GroupLabels interface{}
```

- *Type:* interface{}

group_labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#group_labels OsConfigPatchDeployment#group_labels}

---

##### `InstanceNamePrefixes`<sup>Optional</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes"></a>

```go
InstanceNamePrefixes *[]*string
```

- *Type:* *[]*string

Targets VMs whose name starts with one of these prefixes.

Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#instance_name_prefixes OsConfigPatchDeployment#instance_name_prefixes}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#instances OsConfigPatchDeployment#instances}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#zones OsConfigPatchDeployment#zones}

---

### OsConfigPatchDeploymentInstanceFilterGroupLabels <a name="OsConfigPatchDeploymentInstanceFilterGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels {
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. |

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#labels OsConfigPatchDeployment#labels}

---

### OsConfigPatchDeploymentOneTimeSchedule <a name="OsConfigPatchDeploymentOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentOneTimeSchedule {
	ExecuteTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.property.executeTime">ExecuteTime</a></code> | <code>*string</code> | The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". |

---

##### `ExecuteTime`<sup>Required</sup> <a name="ExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.property.executeTime"></a>

```go
ExecuteTime *string
```

- *Type:* *string

The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#execute_time OsConfigPatchDeployment#execute_time}

---

### OsConfigPatchDeploymentPatchConfig <a name="OsConfigPatchDeploymentPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfig {
	Apt: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt,
	Goo: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo,
	MigInstancesAllowed: interface{},
	PostStep: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep,
	PreStep: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep,
	RebootConfig: *string,
	WindowsUpdate: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate,
	Yum: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum,
	Zypper: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | apt block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | goo block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed">MigInstancesAllowed</a></code> | <code>interface{}</code> | Allows the patch job to run on Managed instance groups (MIGs). |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.postStep">PostStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | post_step block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.preStep">PreStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | pre_step block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.rebootConfig">RebootConfig</a></code> | <code>*string</code> | Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.windowsUpdate">WindowsUpdate</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | windows_update block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | yum block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | zypper block. |

---

##### `Apt`<sup>Optional</sup> <a name="Apt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.apt"></a>

```go
Apt OsConfigPatchDeploymentPatchConfigApt
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

apt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#apt OsConfigPatchDeployment#apt}

---

##### `Goo`<sup>Optional</sup> <a name="Goo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.goo"></a>

```go
Goo OsConfigPatchDeploymentPatchConfigGoo
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

goo block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#goo OsConfigPatchDeployment#goo}

---

##### `MigInstancesAllowed`<sup>Optional</sup> <a name="MigInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed"></a>

```go
MigInstancesAllowed interface{}
```

- *Type:* interface{}

Allows the patch job to run on Managed instance groups (MIGs).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#mig_instances_allowed OsConfigPatchDeployment#mig_instances_allowed}

---

##### `PostStep`<sup>Optional</sup> <a name="PostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.postStep"></a>

```go
PostStep OsConfigPatchDeploymentPatchConfigPostStep
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

post_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#post_step OsConfigPatchDeployment#post_step}

---

##### `PreStep`<sup>Optional</sup> <a name="PreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.preStep"></a>

```go
PreStep OsConfigPatchDeploymentPatchConfigPreStep
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

pre_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#pre_step OsConfigPatchDeployment#pre_step}

---

##### `RebootConfig`<sup>Optional</sup> <a name="RebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.rebootConfig"></a>

```go
RebootConfig *string
```

- *Type:* *string

Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#reboot_config OsConfigPatchDeployment#reboot_config}

---

##### `WindowsUpdate`<sup>Optional</sup> <a name="WindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.windowsUpdate"></a>

```go
WindowsUpdate OsConfigPatchDeploymentPatchConfigWindowsUpdate
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

windows_update block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#windows_update OsConfigPatchDeployment#windows_update}

---

##### `Yum`<sup>Optional</sup> <a name="Yum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.yum"></a>

```go
Yum OsConfigPatchDeploymentPatchConfigYum
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

yum block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#yum OsConfigPatchDeployment#yum}

---

##### `Zypper`<sup>Optional</sup> <a name="Zypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.zypper"></a>

```go
Zypper OsConfigPatchDeploymentPatchConfigZypper
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

zypper block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#zypper OsConfigPatchDeployment#zypper}

---

### OsConfigPatchDeploymentPatchConfigApt <a name="OsConfigPatchDeploymentPatchConfigApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigApt {
	Excludes: *[]*string,
	ExclusivePackages: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.excludes">Excludes</a></code> | <code>*[]*string</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages">ExclusivePackages</a></code> | <code>*[]*string</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.type">Type</a></code> | <code>*string</code> | By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.excludes"></a>

```go
Excludes *[]*string
```

- *Type:* *[]*string

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePackages`<sup>Optional</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages"></a>

```go
ExclusivePackages *[]*string
```

- *Type:* *[]*string

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.type"></a>

```go
Type *string
```

- *Type:* *string

By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#type OsConfigPatchDeployment#type}

---

### OsConfigPatchDeploymentPatchConfigGoo <a name="OsConfigPatchDeploymentPatchConfigGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigGoo {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.property.enabled">Enabled</a></code> | <code>interface{}</code> | goo update settings. Use this setting to override the default goo patch rules. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

goo update settings. Use this setting to override the default goo patch rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#enabled OsConfigPatchDeployment#enabled}

---

### OsConfigPatchDeploymentPatchConfigPostStep <a name="OsConfigPatchDeploymentPatchConfigPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPostStep {
	LinuxExecStepConfig: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig,
	WindowsExecStepConfig: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `LinuxExecStepConfig`<sup>Optional</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig"></a>

```go
LinuxExecStepConfig OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}

---

##### `WindowsExecStepConfig`<sup>Optional</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig"></a>

```go
WindowsExecStepConfig OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}

---

### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
	AllowedSuccessCodes: *[]*f64,
	GcsObject: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject,
	Interpreter: *string,
	LocalPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter">Interpreter</a></code> | <code>*string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath">LocalPath</a></code> | <code>*string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```go
AllowedSuccessCodes *[]*f64
```

- *Type:* *[]*f64

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject"></a>

```go
GcsObject OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter"></a>

```go
Interpreter *string
```

- *Type:* *string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
	Bucket: *string,
	GenerationNumber: *string,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>*string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object">Object</a></code> | <code>*string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```go
GenerationNumber *string
```

- *Type:* *string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object"></a>

```go
Object *string
```

- *Type:* *string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig {
	AllowedSuccessCodes: *[]*f64,
	GcsObject: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject,
	Interpreter: *string,
	LocalPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter">Interpreter</a></code> | <code>*string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath">LocalPath</a></code> | <code>*string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```go
AllowedSuccessCodes *[]*f64
```

- *Type:* *[]*f64

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject"></a>

```go
GcsObject OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter"></a>

```go
Interpreter *string
```

- *Type:* *string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
	Bucket: *string,
	GenerationNumber: *string,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>*string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object">Object</a></code> | <code>*string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```go
GenerationNumber *string
```

- *Type:* *string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object"></a>

```go
Object *string
```

- *Type:* *string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPreStep <a name="OsConfigPatchDeploymentPatchConfigPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPreStep {
	LinuxExecStepConfig: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig,
	WindowsExecStepConfig: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `LinuxExecStepConfig`<sup>Optional</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig"></a>

```go
LinuxExecStepConfig OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}

---

##### `WindowsExecStepConfig`<sup>Optional</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig"></a>

```go
WindowsExecStepConfig OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}

---

### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig {
	AllowedSuccessCodes: *[]*f64,
	GcsObject: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject,
	Interpreter: *string,
	LocalPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter">Interpreter</a></code> | <code>*string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath">LocalPath</a></code> | <code>*string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```go
AllowedSuccessCodes *[]*f64
```

- *Type:* *[]*f64

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject"></a>

```go
GcsObject OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter"></a>

```go
Interpreter *string
```

- *Type:* *string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
	Bucket: *string,
	GenerationNumber: *string,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>*string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object">Object</a></code> | <code>*string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```go
GenerationNumber *string
```

- *Type:* *string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object"></a>

```go
Object *string
```

- *Type:* *string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
	AllowedSuccessCodes: *[]*f64,
	GcsObject: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject,
	Interpreter: *string,
	LocalPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter">Interpreter</a></code> | <code>*string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath">LocalPath</a></code> | <code>*string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```go
AllowedSuccessCodes *[]*f64
```

- *Type:* *[]*f64

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject"></a>

```go
GcsObject OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter"></a>

```go
Interpreter *string
```

- *Type:* *string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
	Bucket: *string,
	GenerationNumber: *string,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>*string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object">Object</a></code> | <code>*string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```go
GenerationNumber *string
```

- *Type:* *string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object"></a>

```go
Object *string
```

- *Type:* *string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigWindowsUpdate <a name="OsConfigPatchDeploymentPatchConfigWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate {
	Classifications: *[]*string,
	Excludes: *[]*string,
	ExclusivePatches: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications">Classifications</a></code> | <code>*[]*string</code> | Only apply updates of these windows update classifications. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes">Excludes</a></code> | <code>*[]*string</code> | List of KBs to exclude from update. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches">ExclusivePatches</a></code> | <code>*[]*string</code> | An exclusive list of kbs to be updated. |

---

##### `Classifications`<sup>Optional</sup> <a name="Classifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications"></a>

```go
Classifications *[]*string
```

- *Type:* *[]*string

Only apply updates of these windows update classifications.

If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#classifications OsConfigPatchDeployment#classifications}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes"></a>

```go
Excludes *[]*string
```

- *Type:* *[]*string

List of KBs to exclude from update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePatches`<sup>Optional</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches"></a>

```go
ExclusivePatches *[]*string
```

- *Type:* *[]*string

An exclusive list of kbs to be updated.

These are the only patches that will be updated.
This field must not be used with other patch configurations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}

---

### OsConfigPatchDeploymentPatchConfigYum <a name="OsConfigPatchDeploymentPatchConfigYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigYum {
	Excludes: *[]*string,
	ExclusivePackages: *[]*string,
	Minimal: interface{},
	Security: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.excludes">Excludes</a></code> | <code>*[]*string</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages">ExclusivePackages</a></code> | <code>*[]*string</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.minimal">Minimal</a></code> | <code>interface{}</code> | Will cause patch to run yum update-minimal instead. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.security">Security</a></code> | <code>interface{}</code> | Adds the --security flag to yum update. Not supported on all platforms. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.excludes"></a>

```go
Excludes *[]*string
```

- *Type:* *[]*string

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePackages`<sup>Optional</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages"></a>

```go
ExclusivePackages *[]*string
```

- *Type:* *[]*string

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}

---

##### `Minimal`<sup>Optional</sup> <a name="Minimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.minimal"></a>

```go
Minimal interface{}
```

- *Type:* interface{}

Will cause patch to run yum update-minimal instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#minimal OsConfigPatchDeployment#minimal}

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.security"></a>

```go
Security interface{}
```

- *Type:* interface{}

Adds the --security flag to yum update. Not supported on all platforms.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#security OsConfigPatchDeployment#security}

---

### OsConfigPatchDeploymentPatchConfigZypper <a name="OsConfigPatchDeploymentPatchConfigZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentPatchConfigZypper {
	Categories: *[]*string,
	Excludes: *[]*string,
	ExclusivePatches: *[]*string,
	Severities: *[]*string,
	WithOptional: interface{},
	WithUpdate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.categories">Categories</a></code> | <code>*[]*string</code> | Install only patches with these categories. Common categories include security, recommended, and feature. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.excludes">Excludes</a></code> | <code>*[]*string</code> | List of packages to exclude from update. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches">ExclusivePatches</a></code> | <code>*[]*string</code> | An exclusive list of patches to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.severities">Severities</a></code> | <code>*[]*string</code> | Install only patches with these severities. Common severities include critical, important, moderate, and low. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withOptional">WithOptional</a></code> | <code>interface{}</code> | Adds the --with-optional flag to zypper patch. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withUpdate">WithUpdate</a></code> | <code>interface{}</code> | Adds the --with-update flag, to zypper patch. |

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.categories"></a>

```go
Categories *[]*string
```

- *Type:* *[]*string

Install only patches with these categories. Common categories include security, recommended, and feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#categories OsConfigPatchDeployment#categories}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.excludes"></a>

```go
Excludes *[]*string
```

- *Type:* *[]*string

List of packages to exclude from update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePatches`<sup>Optional</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches"></a>

```go
ExclusivePatches *[]*string
```

- *Type:* *[]*string

An exclusive list of patches to be updated.

These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.severities"></a>

```go
Severities *[]*string
```

- *Type:* *[]*string

Install only patches with these severities. Common severities include critical, important, moderate, and low.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#severities OsConfigPatchDeployment#severities}

---

##### `WithOptional`<sup>Optional</sup> <a name="WithOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withOptional"></a>

```go
WithOptional interface{}
```

- *Type:* interface{}

Adds the --with-optional flag to zypper patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#with_optional OsConfigPatchDeployment#with_optional}

---

##### `WithUpdate`<sup>Optional</sup> <a name="WithUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withUpdate"></a>

```go
WithUpdate interface{}
```

- *Type:* interface{}

Adds the --with-update flag, to zypper patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#with_update OsConfigPatchDeployment#with_update}

---

### OsConfigPatchDeploymentRecurringSchedule <a name="OsConfigPatchDeploymentRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRecurringSchedule {
	TimeOfDay: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay,
	TimeZone: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone,
	EndTime: *string,
	Monthly: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly,
	StartTime: *string,
	Weekly: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeOfDay">TimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | time_of_day block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | time_zone block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.endTime">EndTime</a></code> | <code>*string</code> | The end time at which a recurring patch deployment schedule is no longer active. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | monthly block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | The time that the recurring schedule becomes effective. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | weekly block. |

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeOfDay"></a>

```go
TimeOfDay OsConfigPatchDeploymentRecurringScheduleTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

time_of_day block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#time_of_day OsConfigPatchDeployment#time_of_day}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeZone"></a>

```go
TimeZone OsConfigPatchDeploymentRecurringScheduleTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#time_zone OsConfigPatchDeployment#time_zone}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The end time at which a recurring patch deployment schedule is no longer active.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#end_time OsConfigPatchDeployment#end_time}

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.monthly"></a>

```go
Monthly OsConfigPatchDeploymentRecurringScheduleMonthly
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

monthly block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#monthly OsConfigPatchDeployment#monthly}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The time that the recurring schedule becomes effective.

Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#start_time OsConfigPatchDeployment#start_time}

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.weekly"></a>

```go
Weekly OsConfigPatchDeploymentRecurringScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#weekly OsConfigPatchDeployment#weekly}

---

### OsConfigPatchDeploymentRecurringScheduleMonthly <a name="OsConfigPatchDeploymentRecurringScheduleMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRecurringScheduleMonthly {
	MonthDay: *f64,
	WeekDayOfMonth: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay">MonthDay</a></code> | <code>*f64</code> | One day of the month. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `MonthDay`<sup>Optional</sup> <a name="MonthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay"></a>

```go
MonthDay *f64
```

- *Type:* *f64

One day of the month.

1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#month_day OsConfigPatchDeployment#month_day}

---

##### `WeekDayOfMonth`<sup>Optional</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth"></a>

```go
WeekDayOfMonth OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#week_day_of_month OsConfigPatchDeployment#week_day_of_month}

---

### OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
	DayOfWeek: *string,
	WeekOrdinal: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal">WeekOrdinal</a></code> | <code>*f64</code> | Week number in a month. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}

---

##### `WeekOrdinal`<sup>Required</sup> <a name="WeekOrdinal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal"></a>

```go
WeekOrdinal *f64
```

- *Type:* *f64

Week number in a month.

1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#week_ordinal OsConfigPatchDeployment#week_ordinal}

---

### OsConfigPatchDeploymentRecurringScheduleTimeOfDay <a name="OsConfigPatchDeploymentRecurringScheduleTimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#hours OsConfigPatchDeployment#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#minutes OsConfigPatchDeployment#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#nanos OsConfigPatchDeployment#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time.

Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#seconds OsConfigPatchDeployment#seconds}

---

### OsConfigPatchDeploymentRecurringScheduleTimeZone <a name="OsConfigPatchDeploymentRecurringScheduleTimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone {
	Id: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.id">Id</a></code> | <code>*string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.version">Version</a></code> | <code>*string</code> | IANA Time Zone Database version number, e.g. "2019a". |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.id"></a>

```go
Id *string
```

- *Type:* *string

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#id OsConfigPatchDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.version"></a>

```go
Version *string
```

- *Type:* *string

IANA Time Zone Database version number, e.g. "2019a".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#version OsConfigPatchDeployment#version}

---

### OsConfigPatchDeploymentRecurringScheduleWeekly <a name="OsConfigPatchDeploymentRecurringScheduleWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRecurringScheduleWeekly {
	DayOfWeek: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}

---

### OsConfigPatchDeploymentRollout <a name="OsConfigPatchDeploymentRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRollout {
	DisruptionBudget: github.com/cdktf/cdktf-provider-google-go/google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.disruptionBudget">DisruptionBudget</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | disruption_budget block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.mode">Mode</a></code> | <code>*string</code> | Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]. |

---

##### `DisruptionBudget`<sup>Required</sup> <a name="DisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.disruptionBudget"></a>

```go
DisruptionBudget OsConfigPatchDeploymentRolloutDisruptionBudget
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

disruption_budget block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#disruption_budget OsConfigPatchDeployment#disruption_budget}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#mode OsConfigPatchDeployment#mode}

---

### OsConfigPatchDeploymentRolloutDisruptionBudget <a name="OsConfigPatchDeploymentRolloutDisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentRolloutDisruptionBudget {
	Fixed: *f64,
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed">Fixed</a></code> | <code>*f64</code> | Specifies a fixed value. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage">Percentage</a></code> | <code>*f64</code> | Specifies the relative value defined as a percentage, which will be multiplied by a reference value. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed"></a>

```go
Fixed *f64
```

- *Type:* *f64

Specifies a fixed value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#fixed OsConfigPatchDeployment#fixed}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

Specifies the relative value defined as a percentage, which will be multiplied by a reference value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#percentage OsConfigPatchDeployment#percentage}

---

### OsConfigPatchDeploymentTimeouts <a name="OsConfigPatchDeploymentTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

&osconfigpatchdeployment.OsConfigPatchDeploymentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#create OsConfigPatchDeployment#create}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#delete OsConfigPatchDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#create OsConfigPatchDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#delete OsConfigPatchDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsConfigPatchDeploymentInstanceFilterGroupLabelsList <a name="OsConfigPatchDeploymentInstanceFilterGroupLabelsList" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentInstanceFilterGroupLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsConfigPatchDeploymentInstanceFilterGroupLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get"></a>

```go
func Get(index *f64) OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference <a name="OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsConfigPatchDeploymentInstanceFilterOutputReference <a name="OsConfigPatchDeploymentInstanceFilterOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentInstanceFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentInstanceFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels">PutGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels">ResetGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes">ResetInstanceNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupLabels` <a name="PutGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels"></a>

```go
func PutGroupLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetGroupLabels` <a name="ResetGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels"></a>

```go
func ResetGroupLabels()
```

##### `ResetInstanceNamePrefixes` <a name="ResetInstanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes"></a>

```go
func ResetInstanceNamePrefixes()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances"></a>

```go
func ResetInstances()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetZones"></a>

```go
func ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels">GroupLabels</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList">OsConfigPatchDeploymentInstanceFilterGroupLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput">GroupLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput">InstanceNamePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupLabels`<sup>Required</sup> <a name="GroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels"></a>

```go
func GroupLabels() OsConfigPatchDeploymentInstanceFilterGroupLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList">OsConfigPatchDeploymentInstanceFilterGroupLabelsList</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `GroupLabelsInput`<sup>Optional</sup> <a name="GroupLabelsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput"></a>

```go
func GroupLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceNamePrefixesInput`<sup>Optional</sup> <a name="InstanceNamePrefixesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput"></a>

```go
func InstanceNamePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `InstanceNamePrefixes`<sup>Required</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes"></a>

```go
func InstanceNamePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentInstanceFilter
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---


### OsConfigPatchDeploymentOneTimeScheduleOutputReference <a name="OsConfigPatchDeploymentOneTimeScheduleOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentOneTimeScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentOneTimeScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput">ExecuteTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime">ExecuteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecuteTimeInput`<sup>Optional</sup> <a name="ExecuteTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput"></a>

```go
func ExecuteTimeInput() *string
```

- *Type:* *string

---

##### `ExecuteTime`<sup>Required</sup> <a name="ExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime"></a>

```go
func ExecuteTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---


### OsConfigPatchDeploymentPatchConfigAptOutputReference <a name="OsConfigPatchDeploymentPatchConfigAptOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigAptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigAptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages">ResetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetExclusivePackages` <a name="ResetExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages"></a>

```go
func ResetExclusivePackages()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput">ExclusivePackagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages">ExclusivePackages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput"></a>

```go
func ExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePackagesInput`<sup>Optional</sup> <a name="ExclusivePackagesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput"></a>

```go
func ExclusivePackagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePackages`<sup>Required</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages"></a>

```go
func ExclusivePackages() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigApt
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---


### OsConfigPatchDeploymentPatchConfigGooOutputReference <a name="OsConfigPatchDeploymentPatchConfigGooOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigGooOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigGooOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigGoo
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---


### OsConfigPatchDeploymentPatchConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt">PutApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo">PutGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep">PutPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep">PutPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate">PutWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum">PutYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper">PutZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetApt">ResetApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetGoo">ResetGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed">ResetMigInstancesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep">ResetPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep">ResetPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig">ResetRebootConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate">ResetWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetYum">ResetYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetZypper">ResetZypper</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApt` <a name="PutApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt"></a>

```go
func PutApt(value OsConfigPatchDeploymentPatchConfigApt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---

##### `PutGoo` <a name="PutGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo"></a>

```go
func PutGoo(value OsConfigPatchDeploymentPatchConfigGoo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `PutPostStep` <a name="PutPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep"></a>

```go
func PutPostStep(value OsConfigPatchDeploymentPatchConfigPostStep)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `PutPreStep` <a name="PutPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep"></a>

```go
func PutPreStep(value OsConfigPatchDeploymentPatchConfigPreStep)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `PutWindowsUpdate` <a name="PutWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate"></a>

```go
func PutWindowsUpdate(value OsConfigPatchDeploymentPatchConfigWindowsUpdate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `PutYum` <a name="PutYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum"></a>

```go
func PutYum(value OsConfigPatchDeploymentPatchConfigYum)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---

##### `PutZypper` <a name="PutZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper"></a>

```go
func PutZypper(value OsConfigPatchDeploymentPatchConfigZypper)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `ResetApt` <a name="ResetApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetApt"></a>

```go
func ResetApt()
```

##### `ResetGoo` <a name="ResetGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetGoo"></a>

```go
func ResetGoo()
```

##### `ResetMigInstancesAllowed` <a name="ResetMigInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed"></a>

```go
func ResetMigInstancesAllowed()
```

##### `ResetPostStep` <a name="ResetPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep"></a>

```go
func ResetPostStep()
```

##### `ResetPreStep` <a name="ResetPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep"></a>

```go
func ResetPreStep()
```

##### `ResetRebootConfig` <a name="ResetRebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig"></a>

```go
func ResetRebootConfig()
```

##### `ResetWindowsUpdate` <a name="ResetWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate"></a>

```go
func ResetWindowsUpdate()
```

##### `ResetYum` <a name="ResetYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetYum"></a>

```go
func ResetYum()
```

##### `ResetZypper` <a name="ResetZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetZypper"></a>

```go
func ResetZypper()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference">OsConfigPatchDeploymentPatchConfigAptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference">OsConfigPatchDeploymentPatchConfigGooOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStep">PostStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference">OsConfigPatchDeploymentPatchConfigPostStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStep">PreStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference">OsConfigPatchDeploymentPatchConfigPreStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate">WindowsUpdate</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference">OsConfigPatchDeploymentPatchConfigYumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference">OsConfigPatchDeploymentPatchConfigZypperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput">AptInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput">GooInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput">MigInstancesAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput">PostStepInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput">PreStepInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput">RebootConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput">WindowsUpdateInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput">YumInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput">ZypperInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed">MigInstancesAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig">RebootConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Apt`<sup>Required</sup> <a name="Apt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.apt"></a>

```go
func Apt() OsConfigPatchDeploymentPatchConfigAptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference">OsConfigPatchDeploymentPatchConfigAptOutputReference</a>

---

##### `Goo`<sup>Required</sup> <a name="Goo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.goo"></a>

```go
func Goo() OsConfigPatchDeploymentPatchConfigGooOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference">OsConfigPatchDeploymentPatchConfigGooOutputReference</a>

---

##### `PostStep`<sup>Required</sup> <a name="PostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStep"></a>

```go
func PostStep() OsConfigPatchDeploymentPatchConfigPostStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference">OsConfigPatchDeploymentPatchConfigPostStepOutputReference</a>

---

##### `PreStep`<sup>Required</sup> <a name="PreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStep"></a>

```go
func PreStep() OsConfigPatchDeploymentPatchConfigPreStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference">OsConfigPatchDeploymentPatchConfigPreStepOutputReference</a>

---

##### `WindowsUpdate`<sup>Required</sup> <a name="WindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate"></a>

```go
func WindowsUpdate() OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a>

---

##### `Yum`<sup>Required</sup> <a name="Yum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yum"></a>

```go
func Yum() OsConfigPatchDeploymentPatchConfigYumOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference">OsConfigPatchDeploymentPatchConfigYumOutputReference</a>

---

##### `Zypper`<sup>Required</sup> <a name="Zypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypper"></a>

```go
func Zypper() OsConfigPatchDeploymentPatchConfigZypperOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference">OsConfigPatchDeploymentPatchConfigZypperOutputReference</a>

---

##### `AptInput`<sup>Optional</sup> <a name="AptInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput"></a>

```go
func AptInput() OsConfigPatchDeploymentPatchConfigApt
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---

##### `GooInput`<sup>Optional</sup> <a name="GooInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput"></a>

```go
func GooInput() OsConfigPatchDeploymentPatchConfigGoo
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `MigInstancesAllowedInput`<sup>Optional</sup> <a name="MigInstancesAllowedInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput"></a>

```go
func MigInstancesAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `PostStepInput`<sup>Optional</sup> <a name="PostStepInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput"></a>

```go
func PostStepInput() OsConfigPatchDeploymentPatchConfigPostStep
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `PreStepInput`<sup>Optional</sup> <a name="PreStepInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput"></a>

```go
func PreStepInput() OsConfigPatchDeploymentPatchConfigPreStep
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `RebootConfigInput`<sup>Optional</sup> <a name="RebootConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput"></a>

```go
func RebootConfigInput() *string
```

- *Type:* *string

---

##### `WindowsUpdateInput`<sup>Optional</sup> <a name="WindowsUpdateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput"></a>

```go
func WindowsUpdateInput() OsConfigPatchDeploymentPatchConfigWindowsUpdate
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `YumInput`<sup>Optional</sup> <a name="YumInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput"></a>

```go
func YumInput() OsConfigPatchDeploymentPatchConfigYum
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---

##### `ZypperInput`<sup>Optional</sup> <a name="ZypperInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput"></a>

```go
func ZypperInput() OsConfigPatchDeploymentPatchConfigZypper
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `MigInstancesAllowed`<sup>Required</sup> <a name="MigInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed"></a>

```go
func MigInstancesAllowed() interface{}
```

- *Type:* interface{}

---

##### `RebootConfig`<sup>Required</sup> <a name="RebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig"></a>

```go
func RebootConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```go
func GenerationNumberInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```go
func GenerationNumber() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```go
func PutGcsObject(value OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```go
func ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```go
func ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```go
func ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```go
func GcsObject() OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```go
func AllowedSuccessCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```go
func GcsObjectInput() OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```go
func InterpreterInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```go
func AllowedSuccessCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```go
func Interpreter() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPostStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPostStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig">PutLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig">PutWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig">ResetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig">ResetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxExecStepConfig` <a name="PutLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig"></a>

```go
func PutLinuxExecStepConfig(value OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `PutWindowsExecStepConfig` <a name="PutWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig"></a>

```go
func PutWindowsExecStepConfig(value OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `ResetLinuxExecStepConfig` <a name="ResetLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig"></a>

```go
func ResetLinuxExecStepConfig()
```

##### `ResetWindowsExecStepConfig` <a name="ResetWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig"></a>

```go
func ResetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput">LinuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput">WindowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinuxExecStepConfig`<sup>Required</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig"></a>

```go
func LinuxExecStepConfig() OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a>

---

##### `WindowsExecStepConfig`<sup>Required</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig"></a>

```go
func WindowsExecStepConfig() OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a>

---

##### `LinuxExecStepConfigInput`<sup>Optional</sup> <a name="LinuxExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput"></a>

```go
func LinuxExecStepConfigInput() OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `WindowsExecStepConfigInput`<sup>Optional</sup> <a name="WindowsExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput"></a>

```go
func WindowsExecStepConfigInput() OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPostStep
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```go
func GenerationNumberInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```go
func GenerationNumber() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```go
func PutGcsObject(value OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```go
func ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```go
func ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```go
func ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```go
func GcsObject() OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```go
func AllowedSuccessCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```go
func GcsObjectInput() OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```go
func InterpreterInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```go
func AllowedSuccessCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```go
func Interpreter() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```go
func GenerationNumberInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```go
func GenerationNumber() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```go
func PutGcsObject(value OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```go
func ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```go
func ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```go
func ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```go
func GcsObject() OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```go
func AllowedSuccessCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```go
func GcsObjectInput() OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```go
func InterpreterInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```go
func AllowedSuccessCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```go
func Interpreter() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPreStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPreStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig">PutLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig">PutWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig">ResetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig">ResetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxExecStepConfig` <a name="PutLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig"></a>

```go
func PutLinuxExecStepConfig(value OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `PutWindowsExecStepConfig` <a name="PutWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig"></a>

```go
func PutWindowsExecStepConfig(value OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `ResetLinuxExecStepConfig` <a name="ResetLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig"></a>

```go
func ResetLinuxExecStepConfig()
```

##### `ResetWindowsExecStepConfig` <a name="ResetWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig"></a>

```go
func ResetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput">LinuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput">WindowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinuxExecStepConfig`<sup>Required</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig"></a>

```go
func LinuxExecStepConfig() OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a>

---

##### `WindowsExecStepConfig`<sup>Required</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig"></a>

```go
func WindowsExecStepConfig() OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a>

---

##### `LinuxExecStepConfigInput`<sup>Optional</sup> <a name="LinuxExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput"></a>

```go
func LinuxExecStepConfigInput() OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `WindowsExecStepConfigInput`<sup>Optional</sup> <a name="WindowsExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput"></a>

```go
func WindowsExecStepConfigInput() OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPreStep
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```go
func GenerationNumberInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```go
func GenerationNumber() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```go
func PutGcsObject(value OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```go
func ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```go
func ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```go
func ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```go
func GcsObject() OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```go
func AllowedSuccessCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```go
func GcsObjectInput() OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```go
func InterpreterInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```go
func AllowedSuccessCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```go
func Interpreter() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference <a name="OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications">ResetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches">ResetExclusivePatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassifications` <a name="ResetClassifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications"></a>

```go
func ResetClassifications()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetExclusivePatches` <a name="ResetExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches"></a>

```go
func ResetExclusivePatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput">ClassificationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput">ExclusivePatchesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications">Classifications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches">ExclusivePatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationsInput`<sup>Optional</sup> <a name="ClassificationsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput"></a>

```go
func ClassificationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput"></a>

```go
func ExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePatchesInput`<sup>Optional</sup> <a name="ExclusivePatchesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput"></a>

```go
func ExclusivePatchesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Classifications`<sup>Required</sup> <a name="Classifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications"></a>

```go
func Classifications() *[]*string
```

- *Type:* *[]*string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePatches`<sup>Required</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches"></a>

```go
func ExclusivePatches() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigWindowsUpdate
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---


### OsConfigPatchDeploymentPatchConfigYumOutputReference <a name="OsConfigPatchDeploymentPatchConfigYumOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigYumOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigYumOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages">ResetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal">ResetMinimal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity">ResetSecurity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetExclusivePackages` <a name="ResetExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages"></a>

```go
func ResetExclusivePackages()
```

##### `ResetMinimal` <a name="ResetMinimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal"></a>

```go
func ResetMinimal()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity"></a>

```go
func ResetSecurity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput">ExclusivePackagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput">MinimalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput">SecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages">ExclusivePackages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal">Minimal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.security">Security</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput"></a>

```go
func ExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePackagesInput`<sup>Optional</sup> <a name="ExclusivePackagesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput"></a>

```go
func ExclusivePackagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MinimalInput`<sup>Optional</sup> <a name="MinimalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput"></a>

```go
func MinimalInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput"></a>

```go
func SecurityInput() interface{}
```

- *Type:* interface{}

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePackages`<sup>Required</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages"></a>

```go
func ExclusivePackages() *[]*string
```

- *Type:* *[]*string

---

##### `Minimal`<sup>Required</sup> <a name="Minimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal"></a>

```go
func Minimal() interface{}
```

- *Type:* interface{}

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.security"></a>

```go
func Security() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigYum
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---


### OsConfigPatchDeploymentPatchConfigZypperOutputReference <a name="OsConfigPatchDeploymentPatchConfigZypperOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentPatchConfigZypperOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentPatchConfigZypperOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches">ResetExclusivePatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional">ResetWithOptional</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate">ResetWithUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories"></a>

```go
func ResetCategories()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetExclusivePatches` <a name="ResetExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches"></a>

```go
func ResetExclusivePatches()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities"></a>

```go
func ResetSeverities()
```

##### `ResetWithOptional` <a name="ResetWithOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional"></a>

```go
func ResetWithOptional()
```

##### `ResetWithUpdate` <a name="ResetWithUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate"></a>

```go
func ResetWithUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput">ExclusivePatchesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput">WithOptionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput">WithUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches">ExclusivePatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities">Severities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional">WithOptional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate">WithUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput"></a>

```go
func CategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput"></a>

```go
func ExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePatchesInput`<sup>Optional</sup> <a name="ExclusivePatchesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput"></a>

```go
func ExclusivePatchesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput"></a>

```go
func SeveritiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WithOptionalInput`<sup>Optional</sup> <a name="WithOptionalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput"></a>

```go
func WithOptionalInput() interface{}
```

- *Type:* interface{}

---

##### `WithUpdateInput`<sup>Optional</sup> <a name="WithUpdateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput"></a>

```go
func WithUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusivePatches`<sup>Required</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches"></a>

```go
func ExclusivePatches() *[]*string
```

- *Type:* *[]*string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities"></a>

```go
func Severities() *[]*string
```

- *Type:* *[]*string

---

##### `WithOptional`<sup>Required</sup> <a name="WithOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional"></a>

```go
func WithOptional() interface{}
```

- *Type:* interface{}

---

##### `WithUpdate`<sup>Required</sup> <a name="WithUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate"></a>

```go
func WithUpdate() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentPatchConfigZypper
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---


### OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth">PutWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay">ResetMonthDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth">ResetWeekDayOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayOfMonth` <a name="PutWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth"></a>

```go
func PutWeekDayOfMonth(value OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `ResetMonthDay` <a name="ResetMonthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay"></a>

```go
func ResetMonthDay()
```

##### `ResetWeekDayOfMonth` <a name="ResetWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth"></a>

```go
func ResetWeekDayOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput">MonthDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput">WeekDayOfMonthInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay">MonthDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WeekDayOfMonth`<sup>Required</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth"></a>

```go
func WeekDayOfMonth() OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a>

---

##### `MonthDayInput`<sup>Optional</sup> <a name="MonthDayInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput"></a>

```go
func MonthDayInput() *f64
```

- *Type:* *f64

---

##### `WeekDayOfMonthInput`<sup>Optional</sup> <a name="WeekDayOfMonthInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput"></a>

```go
func WeekDayOfMonthInput() OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `MonthDay`<sup>Required</sup> <a name="MonthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay"></a>

```go
func MonthDay() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRecurringScheduleMonthly
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---


### OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput">WeekOrdinalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal">WeekOrdinal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `WeekOrdinalInput`<sup>Optional</sup> <a name="WeekOrdinalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput"></a>

```go
func WeekOrdinalInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `WeekOrdinal`<sup>Required</sup> <a name="WeekOrdinal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal"></a>

```go
func WeekOrdinal() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---


### OsConfigPatchDeploymentRecurringScheduleOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRecurringScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRecurringScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay">PutTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthly` <a name="PutMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly"></a>

```go
func PutMonthly(value OsConfigPatchDeploymentRecurringScheduleMonthly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `PutTimeOfDay` <a name="PutTimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay"></a>

```go
func PutTimeOfDay(value OsConfigPatchDeploymentRecurringScheduleTimeOfDay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone"></a>

```go
func PutTimeZone(value OsConfigPatchDeploymentRecurringScheduleTimeZone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly"></a>

```go
func PutWeekly(value OsConfigPatchDeploymentRecurringScheduleWeekly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly"></a>

```go
func ResetMonthly()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly"></a>

```go
func ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime">LastExecuteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime">NextExecuteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastExecuteTime`<sup>Required</sup> <a name="LastExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime"></a>

```go
func LastExecuteTime() *string
```

- *Type:* *string

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly"></a>

```go
func Monthly() OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a>

---

##### `NextExecuteTime`<sup>Required</sup> <a name="NextExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime"></a>

```go
func NextExecuteTime() *string
```

- *Type:* *string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone"></a>

```go
func TimeZone() OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly"></a>

```go
func Weekly() OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput"></a>

```go
func MonthlyInput() OsConfigPatchDeploymentRecurringScheduleMonthly
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput"></a>

```go
func TimeOfDayInput() OsConfigPatchDeploymentRecurringScheduleTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() OsConfigPatchDeploymentRecurringScheduleTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput"></a>

```go
func WeeklyInput() OsConfigPatchDeploymentRecurringScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---


### OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRecurringScheduleTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---


### OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRecurringScheduleTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---


### OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRecurringScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---


### OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference <a name="OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed"></a>

```go
func ResetFixed()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput">FixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed">Fixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput"></a>

```go
func FixedInput() *f64
```

- *Type:* *f64

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed"></a>

```go
func Fixed() *f64
```

- *Type:* *f64

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRolloutDisruptionBudget
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


### OsConfigPatchDeploymentRolloutOutputReference <a name="OsConfigPatchDeploymentRolloutOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentRolloutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentRolloutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget">PutDisruptionBudget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisruptionBudget` <a name="PutDisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget"></a>

```go
func PutDisruptionBudget(value OsConfigPatchDeploymentRolloutDisruptionBudget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget">DisruptionBudget</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput">DisruptionBudgetInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisruptionBudget`<sup>Required</sup> <a name="DisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget"></a>

```go
func DisruptionBudget() OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a>

---

##### `DisruptionBudgetInput`<sup>Optional</sup> <a name="DisruptionBudgetInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput"></a>

```go
func DisruptionBudgetInput() OsConfigPatchDeploymentRolloutDisruptionBudget
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.internalValue"></a>

```go
func InternalValue() OsConfigPatchDeploymentRollout
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---


### OsConfigPatchDeploymentTimeoutsOutputReference <a name="OsConfigPatchDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osconfigpatchdeployment"

osconfigpatchdeployment.NewOsConfigPatchDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsConfigPatchDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



