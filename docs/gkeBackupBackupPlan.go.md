# `gkeBackupBackupPlan` Submodule <a name="`gkeBackupBackupPlan` Submodule" id="@cdktf/provider-google.gkeBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupBackupPlan <a name="GkeBackupBackupPlan" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan google_gke_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlan(scope Construct, id *string, config GkeBackupBackupPlanConfig) GkeBackupBackupPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig">GkeBackupBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig">GkeBackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig">PutBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule">PutBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupConfig">ResetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupSchedule">ResetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBackupConfig` <a name="PutBackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig"></a>

```go
func PutBackupConfig(value GkeBackupBackupPlanBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---

##### `PutBackupSchedule` <a name="PutBackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule"></a>

```go
func PutBackupSchedule(value GkeBackupBackupPlanBackupSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value GkeBackupBackupPlanRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts"></a>

```go
func PutTimeouts(value GkeBackupBackupPlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

---

##### `ResetBackupConfig` <a name="ResetBackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupConfig"></a>

```go
func ResetBackupConfig()
```

##### `ResetBackupSchedule` <a name="ResetBackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupSchedule"></a>

```go
func ResetBackupSchedule()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeactivated"></a>

```go
func ResetDeactivated()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.GkeBackupBackupPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.GkeBackupBackupPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.GkeBackupBackupPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference">GkeBackupBackupPlanBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupSchedule">BackupSchedule</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference">GkeBackupBackupPlanBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedPodCount">ProtectedPodCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference">GkeBackupBackupPlanRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference">GkeBackupBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfigInput">BackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupScheduleInput">BackupScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivatedInput">DeactivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfig"></a>

```go
func BackupConfig() GkeBackupBackupPlanBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference">GkeBackupBackupPlanBackupConfigOutputReference</a>

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupSchedule"></a>

```go
func BackupSchedule() GkeBackupBackupPlanBackupScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference">GkeBackupBackupPlanBackupScheduleOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ProtectedPodCount`<sup>Required</sup> <a name="ProtectedPodCount" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedPodCount"></a>

```go
func ProtectedPodCount() *f64
```

- *Type:* *f64

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicy"></a>

```go
func RetentionPolicy() GkeBackupBackupPlanRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference">GkeBackupBackupPlanRetentionPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeouts"></a>

```go
func Timeouts() GkeBackupBackupPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference">GkeBackupBackupPlanTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BackupConfigInput`<sup>Optional</sup> <a name="BackupConfigInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfigInput"></a>

```go
func BackupConfigInput() GkeBackupBackupPlanBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---

##### `BackupScheduleInput`<sup>Optional</sup> <a name="BackupScheduleInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupScheduleInput"></a>

```go
func BackupScheduleInput() GkeBackupBackupPlanBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivatedInput"></a>

```go
func DeactivatedInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() GkeBackupBackupPlanRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivated"></a>

```go
func Deactivated() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupBackupPlanBackupConfig <a name="GkeBackupBackupPlanBackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanBackupConfig {
	AllNamespaces: interface{},
	EncryptionKey: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey,
	IncludeSecrets: interface{},
	IncludeVolumeData: interface{},
	SelectedApplications: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications,
	SelectedNamespaces: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.allNamespaces">AllNamespaces</a></code> | <code>interface{}</code> | If True, include all namespaced resources. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeSecrets">IncludeSecrets</a></code> | <code>interface{}</code> | This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeVolumeData">IncludeVolumeData</a></code> | <code>interface{}</code> | This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | selected_namespaces block. |

---

##### `AllNamespaces`<sup>Optional</sup> <a name="AllNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.allNamespaces"></a>

```go
AllNamespaces interface{}
```

- *Type:* interface{}

If True, include all namespaced resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#all_namespaces GkeBackupBackupPlan#all_namespaces}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.encryptionKey"></a>

```go
EncryptionKey GkeBackupBackupPlanBackupConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#encryption_key GkeBackupBackupPlan#encryption_key}

---

##### `IncludeSecrets`<sup>Optional</sup> <a name="IncludeSecrets" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeSecrets"></a>

```go
IncludeSecrets interface{}
```

- *Type:* interface{}

This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#include_secrets GkeBackupBackupPlan#include_secrets}

---

##### `IncludeVolumeData`<sup>Optional</sup> <a name="IncludeVolumeData" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeVolumeData"></a>

```go
IncludeVolumeData interface{}
```

- *Type:* interface{}

This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#include_volume_data GkeBackupBackupPlan#include_volume_data}

---

##### `SelectedApplications`<sup>Optional</sup> <a name="SelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedApplications"></a>

```go
SelectedApplications GkeBackupBackupPlanBackupConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#selected_applications GkeBackupBackupPlan#selected_applications}

---

##### `SelectedNamespaces`<sup>Optional</sup> <a name="SelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaces"></a>

```go
SelectedNamespaces GkeBackupBackupPlanBackupConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#selected_namespaces GkeBackupBackupPlan#selected_namespaces}

---

### GkeBackupBackupPlanBackupConfigEncryptionKey <a name="GkeBackupBackupPlanBackupConfigEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanBackupConfigEncryptionKey {
	GcpKmsEncryptionKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey">GcpKmsEncryptionKey</a></code> | <code>*string</code> | Google Cloud KMS encryption key. Format: projects/*\/locations/*\/keyRings/*\/cryptoKeys/*. |

---

##### `GcpKmsEncryptionKey`<sup>Required</sup> <a name="GcpKmsEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey"></a>

```go
GcpKmsEncryptionKey *string
```

- *Type:* *string

Google Cloud KMS encryption key. Format: projects/*\/locations/*\/keyRings/*\/cryptoKeys/*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#gcp_kms_encryption_key GkeBackupBackupPlan#gcp_kms_encryption_key}

---

### GkeBackupBackupPlanBackupConfigSelectedApplications <a name="GkeBackupBackupPlanBackupConfigSelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanBackupConfigSelectedApplications {
	NamespacedNames: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames">NamespacedNames</a></code> | <code>interface{}</code> | namespaced_names block. |

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames"></a>

```go
NamespacedNames interface{}
```

- *Type:* interface{}

namespaced_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#namespaced_names GkeBackupBackupPlan#namespaced_names}

---

### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames {
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name">Name</a></code> | <code>*string</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace of a Kubernetes Resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#name GkeBackupBackupPlan#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#namespace GkeBackupBackupPlan#namespace}

---

### GkeBackupBackupPlanBackupConfigSelectedNamespaces <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanBackupConfigSelectedNamespaces {
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | A list of Kubernetes Namespaces. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#namespaces GkeBackupBackupPlan#namespaces}

---

### GkeBackupBackupPlanBackupSchedule <a name="GkeBackupBackupPlanBackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanBackupSchedule {
	CronSchedule: *string,
	Paused: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.paused">Paused</a></code> | <code>interface{}</code> | This flag denotes whether automatic Backup creation is paused for this BackupPlan. |

---

##### `CronSchedule`<sup>Optional</sup> <a name="CronSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.cronSchedule"></a>

```go
CronSchedule *string
```

- *Type:* *string

A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan.

If this is defined, then backupRetainDays must also be defined.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#cron_schedule GkeBackupBackupPlan#cron_schedule}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

This flag denotes whether automatic Backup creation is paused for this BackupPlan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#paused GkeBackupBackupPlan#paused}

---

### GkeBackupBackupPlanConfig <a name="GkeBackupBackupPlanConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	Location: *string,
	Name: *string,
	BackupConfig: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig,
	BackupSchedule: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule,
	Deactivated: interface{},
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	RetentionPolicy: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.location">Location</a></code> | <code>*string</code> | The region of the Backup Plan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.name">Name</a></code> | <code>*string</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupSchedule">BackupSchedule</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.description">Description</a></code> | <code>*string</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#id GkeBackupBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#project GkeBackupBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#cluster GkeBackupBackupPlan#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#location GkeBackupBackupPlan#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#name GkeBackupBackupPlan#name}

---

##### `BackupConfig`<sup>Optional</sup> <a name="BackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupConfig"></a>

```go
BackupConfig GkeBackupBackupPlanBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#backup_config GkeBackupBackupPlan#backup_config}

---

##### `BackupSchedule`<sup>Optional</sup> <a name="BackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupSchedule"></a>

```go
BackupSchedule GkeBackupBackupPlanBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#backup_schedule GkeBackupBackupPlan#backup_schedule}

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deactivated"></a>

```go
Deactivated interface{}
```

- *Type:* interface{}

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#deactivated GkeBackupBackupPlan#deactivated}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#description GkeBackupBackupPlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#id GkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#labels GkeBackupBackupPlan#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#project GkeBackupBackupPlan#project}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.retentionPolicy"></a>

```go
RetentionPolicy GkeBackupBackupPlanRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#retention_policy GkeBackupBackupPlan#retention_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.timeouts"></a>

```go
Timeouts GkeBackupBackupPlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#timeouts GkeBackupBackupPlan#timeouts}

---

### GkeBackupBackupPlanRetentionPolicy <a name="GkeBackupBackupPlanRetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanRetentionPolicy {
	BackupDeleteLockDays: *f64,
	BackupRetainDays: *f64,
	Locked: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays">BackupDeleteLockDays</a></code> | <code>*f64</code> | Minimum age for a Backup created via this BackupPlan (in days). |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupRetainDays">BackupRetainDays</a></code> | <code>*f64</code> | The default maximum age of a Backup created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.locked">Locked</a></code> | <code>interface{}</code> | This flag denotes whether the retention policy of this BackupPlan is locked. |

---

##### `BackupDeleteLockDays`<sup>Optional</sup> <a name="BackupDeleteLockDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays"></a>

```go
BackupDeleteLockDays *f64
```

- *Type:* *f64

Minimum age for a Backup created via this BackupPlan (in days).

Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#backup_delete_lock_days GkeBackupBackupPlan#backup_delete_lock_days}

---

##### `BackupRetainDays`<sup>Optional</sup> <a name="BackupRetainDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupRetainDays"></a>

```go
BackupRetainDays *f64
```

- *Type:* *f64

The default maximum age of a Backup created via this BackupPlan.

This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 * the creation interval.]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#backup_retain_days GkeBackupBackupPlan#backup_retain_days}

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.locked"></a>

```go
Locked interface{}
```

- *Type:* interface{}

This flag denotes whether the retention policy of this BackupPlan is locked.

If set to True, no further update is allowed on this policy, including
the locked field itself.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#locked GkeBackupBackupPlan#locked}

---

### GkeBackupBackupPlanTimeouts <a name="GkeBackupBackupPlanTimeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

&gkebackupbackupplan.GkeBackupBackupPlanTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#create GkeBackupBackupPlan#create}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#delete GkeBackupBackupPlan#delete}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#update GkeBackupBackupPlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#create GkeBackupBackupPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#delete GkeBackupBackupPlan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_backup_backup_plan#update GkeBackupBackupPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference <a name="GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput">GcpKmsEncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey">GcpKmsEncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpKmsEncryptionKeyInput`<sup>Optional</sup> <a name="GcpKmsEncryptionKeyInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput"></a>

```go
func GcpKmsEncryptionKeyInput() *string
```

- *Type:* *string

---

##### `GcpKmsEncryptionKey`<sup>Required</sup> <a name="GcpKmsEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey"></a>

```go
func GcpKmsEncryptionKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupBackupPlanBackupConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---


### GkeBackupBackupPlanBackupConfigOutputReference <a name="GkeBackupBackupPlanBackupConfigOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupBackupPlanBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications">PutSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces">PutSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces">ResetAllNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets">ResetIncludeSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData">ResetIncludeVolumeData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications">ResetSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces">ResetSelectedNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey"></a>

```go
func PutEncryptionKey(value GkeBackupBackupPlanBackupConfigEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `PutSelectedApplications` <a name="PutSelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications"></a>

```go
func PutSelectedApplications(value GkeBackupBackupPlanBackupConfigSelectedApplications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `PutSelectedNamespaces` <a name="PutSelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces"></a>

```go
func PutSelectedNamespaces(value GkeBackupBackupPlanBackupConfigSelectedNamespaces)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `ResetAllNamespaces` <a name="ResetAllNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces"></a>

```go
func ResetAllNamespaces()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetIncludeSecrets` <a name="ResetIncludeSecrets" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets"></a>

```go
func ResetIncludeSecrets()
```

##### `ResetIncludeVolumeData` <a name="ResetIncludeVolumeData" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData"></a>

```go
func ResetIncludeVolumeData()
```

##### `ResetSelectedApplications` <a name="ResetSelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications"></a>

```go
func ResetSelectedApplications()
```

##### `ResetSelectedNamespaces` <a name="ResetSelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces"></a>

```go
func ResetSelectedNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput">AllNamespacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput">IncludeSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput">IncludeVolumeDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput">SelectedApplicationsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput">SelectedNamespacesInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces">AllNamespaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets">IncludeSecrets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData">IncludeVolumeData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a>

---

##### `SelectedApplications`<sup>Required</sup> <a name="SelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications"></a>

```go
func SelectedApplications() GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a>

---

##### `SelectedNamespaces`<sup>Required</sup> <a name="SelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces"></a>

```go
func SelectedNamespaces() GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a>

---

##### `AllNamespacesInput`<sup>Optional</sup> <a name="AllNamespacesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput"></a>

```go
func AllNamespacesInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() GkeBackupBackupPlanBackupConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `IncludeSecretsInput`<sup>Optional</sup> <a name="IncludeSecretsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput"></a>

```go
func IncludeSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeVolumeDataInput`<sup>Optional</sup> <a name="IncludeVolumeDataInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput"></a>

```go
func IncludeVolumeDataInput() interface{}
```

- *Type:* interface{}

---

##### `SelectedApplicationsInput`<sup>Optional</sup> <a name="SelectedApplicationsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput"></a>

```go
func SelectedApplicationsInput() GkeBackupBackupPlanBackupConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `SelectedNamespacesInput`<sup>Optional</sup> <a name="SelectedNamespacesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput"></a>

```go
func SelectedNamespacesInput() GkeBackupBackupPlanBackupConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `AllNamespaces`<sup>Required</sup> <a name="AllNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces"></a>

```go
func AllNamespaces() interface{}
```

- *Type:* interface{}

---

##### `IncludeSecrets`<sup>Required</sup> <a name="IncludeSecrets" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets"></a>

```go
func IncludeSecrets() interface{}
```

- *Type:* interface{}

---

##### `IncludeVolumeData`<sup>Required</sup> <a name="IncludeVolumeData" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData"></a>

```go
func IncludeVolumeData() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupBackupPlanBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get"></a>

```go
func Get(index *f64) GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames">PutNamespacedNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespacedNames` <a name="PutNamespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```go
func PutNamespacedNames(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames">NamespacedNames</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">NamespacedNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```go
func NamespacedNames() GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `NamespacedNamesInput`<sup>Optional</sup> <a name="NamespacedNamesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```go
func NamespacedNamesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupBackupPlanBackupConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---


### GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupBackupPlanBackupConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---


### GkeBackupBackupPlanBackupScheduleOutputReference <a name="GkeBackupBackupPlanBackupScheduleOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanBackupScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupBackupPlanBackupScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule">ResetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetPaused">ResetPaused</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronSchedule` <a name="ResetCronSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule"></a>

```go
func ResetCronSchedule()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetPaused"></a>

```go
func ResetPaused()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput">CronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronScheduleInput`<sup>Optional</sup> <a name="CronScheduleInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput"></a>

```go
func CronScheduleInput() *string
```

- *Type:* *string

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `CronSchedule`<sup>Required</sup> <a name="CronSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule"></a>

```go
func CronSchedule() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupBackupPlanBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---


### GkeBackupBackupPlanRetentionPolicyOutputReference <a name="GkeBackupBackupPlanRetentionPolicyOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupBackupPlanRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays">ResetBackupDeleteLockDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays">ResetBackupRetainDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked">ResetLocked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupDeleteLockDays` <a name="ResetBackupDeleteLockDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays"></a>

```go
func ResetBackupDeleteLockDays()
```

##### `ResetBackupRetainDays` <a name="ResetBackupRetainDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays"></a>

```go
func ResetBackupRetainDays()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked"></a>

```go
func ResetLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput">BackupDeleteLockDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput">BackupRetainDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput">LockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays">BackupDeleteLockDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays">BackupRetainDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.locked">Locked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupDeleteLockDaysInput`<sup>Optional</sup> <a name="BackupDeleteLockDaysInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput"></a>

```go
func BackupDeleteLockDaysInput() *f64
```

- *Type:* *f64

---

##### `BackupRetainDaysInput`<sup>Optional</sup> <a name="BackupRetainDaysInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput"></a>

```go
func BackupRetainDaysInput() *f64
```

- *Type:* *f64

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput"></a>

```go
func LockedInput() interface{}
```

- *Type:* interface{}

---

##### `BackupDeleteLockDays`<sup>Required</sup> <a name="BackupDeleteLockDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays"></a>

```go
func BackupDeleteLockDays() *f64
```

- *Type:* *f64

---

##### `BackupRetainDays`<sup>Required</sup> <a name="BackupRetainDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays"></a>

```go
func BackupRetainDays() *f64
```

- *Type:* *f64

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.locked"></a>

```go
func Locked() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupBackupPlanRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---


### GkeBackupBackupPlanTimeoutsOutputReference <a name="GkeBackupBackupPlanTimeoutsOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackupbackupplan"

gkebackupbackupplan.NewGkeBackupBackupPlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupBackupPlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



