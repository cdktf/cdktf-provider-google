# `loggingProjectBucketConfig` Submodule <a name="`loggingProjectBucketConfig` Submodule" id="@cdktf/provider-google.loggingProjectBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingProjectBucketConfig <a name="LoggingProjectBucketConfig" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config google_logging_project_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectbucketconfig"

loggingprojectbucketconfig.NewLoggingProjectBucketConfig(scope Construct, id *string, config LoggingProjectBucketConfigConfig) LoggingProjectBucketConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig">LoggingProjectBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig">LoggingProjectBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetEnableAnalytics">ResetEnableAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings"></a>

```go
func PutCmekSettings(value LoggingProjectBucketConfigCmekSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetCmekSettings"></a>

```go
func ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableAnalytics` <a name="ResetEnableAnalytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetEnableAnalytics"></a>

```go
func ResetEnableAnalytics()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectbucketconfig"

loggingprojectbucketconfig.LoggingProjectBucketConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectbucketconfig"

loggingprojectbucketconfig.LoggingProjectBucketConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectbucketconfig"

loggingprojectbucketconfig.LoggingProjectBucketConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference">LoggingProjectBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketIdInput">BucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalyticsInput">EnableAnalyticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalytics">EnableAnalytics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettings"></a>

```go
func CmekSettings() LoggingProjectBucketConfigCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference">LoggingProjectBucketConfigCmekSettingsOutputReference</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketIdInput"></a>

```go
func BucketIdInput() *string
```

- *Type:* *string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettingsInput"></a>

```go
func CmekSettingsInput() LoggingProjectBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableAnalyticsInput`<sup>Optional</sup> <a name="EnableAnalyticsInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalyticsInput"></a>

```go
func EnableAnalyticsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketId"></a>

```go
func BucketId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableAnalytics`<sup>Required</sup> <a name="EnableAnalytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalytics"></a>

```go
func EnableAnalytics() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingProjectBucketConfigCmekSettings <a name="LoggingProjectBucketConfigCmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectbucketconfig"

&loggingprojectbucketconfig.LoggingProjectBucketConfigCmekSettings {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name for the configured Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#kms_key_name LoggingProjectBucketConfig#kms_key_name}

---

### LoggingProjectBucketConfigConfig <a name="LoggingProjectBucketConfigConfig" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectbucketconfig"

&loggingprojectbucketconfig.LoggingProjectBucketConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketId: *string,
	Location: *string,
	Project: *string,
	CmekSettings: github.com/cdktf/cdktf-provider-google-go/google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings,
	Description: *string,
	EnableAnalytics: interface{},
	Id: *string,
	RetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.project">Project</a></code> | <code>*string</code> | The parent project that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.enableAnalytics">EnableAnalytics</a></code> | <code>interface{}</code> | Enable log analytics for the bucket. Cannot be disabled once enabled. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#id LoggingProjectBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.bucketId"></a>

```go
BucketId *string
```

- *Type:* *string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#bucket_id LoggingProjectBucketConfig#bucket_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#location LoggingProjectBucketConfig#location}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The parent project that contains the logging bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#project LoggingProjectBucketConfig#project}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.cmekSettings"></a>

```go
CmekSettings LoggingProjectBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#cmek_settings LoggingProjectBucketConfig#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#description LoggingProjectBucketConfig#description}

---

##### `EnableAnalytics`<sup>Optional</sup> <a name="EnableAnalytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.enableAnalytics"></a>

```go
EnableAnalytics interface{}
```

- *Type:* interface{}

Enable log analytics for the bucket. Cannot be disabled once enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#enable_analytics LoggingProjectBucketConfig#enable_analytics}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#id LoggingProjectBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#retention_days LoggingProjectBucketConfig#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingProjectBucketConfigCmekSettingsOutputReference <a name="LoggingProjectBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectbucketconfig"

loggingprojectbucketconfig.NewLoggingProjectBucketConfigCmekSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingProjectBucketConfigCmekSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```go
func KmsKeyVersionName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingProjectBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---



