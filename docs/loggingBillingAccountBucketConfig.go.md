# `loggingBillingAccountBucketConfig` Submodule <a name="`loggingBillingAccountBucketConfig` Submodule" id="@cdktf/provider-google.loggingBillingAccountBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingBillingAccountBucketConfig <a name="LoggingBillingAccountBucketConfig" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config google_logging_billing_account_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountbucketconfig"

loggingbillingaccountbucketconfig.NewLoggingBillingAccountBucketConfig(scope Construct, id *string, config LoggingBillingAccountBucketConfigConfig) LoggingBillingAccountBucketConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig">LoggingBillingAccountBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig">LoggingBillingAccountBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putCmekSettings"></a>

```go
func PutCmekSettings(value LoggingBillingAccountBucketConfigCmekSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetCmekSettings"></a>

```go
func ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountbucketconfig"

loggingbillingaccountbucketconfig.LoggingBillingAccountBucketConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountbucketconfig"

loggingbillingaccountbucketconfig.LoggingBillingAccountBucketConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountbucketconfig"

loggingbillingaccountbucketconfig.LoggingBillingAccountBucketConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference">LoggingBillingAccountBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccountInput">BillingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketIdInput">BucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettings"></a>

```go
func CmekSettings() LoggingBillingAccountBucketConfigCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference">LoggingBillingAccountBucketConfigCmekSettingsOutputReference</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccountInput"></a>

```go
func BillingAccountInput() *string
```

- *Type:* *string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketIdInput"></a>

```go
func BucketIdInput() *string
```

- *Type:* *string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettingsInput"></a>

```go
func CmekSettingsInput() LoggingBillingAccountBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccount"></a>

```go
func BillingAccount() *string
```

- *Type:* *string

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketId"></a>

```go
func BucketId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingBillingAccountBucketConfigCmekSettings <a name="LoggingBillingAccountBucketConfigCmekSettings" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountbucketconfig"

&loggingbillingaccountbucketconfig.LoggingBillingAccountBucketConfigCmekSettings {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name for the configured Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName"></a>

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#kms_key_name LoggingBillingAccountBucketConfig#kms_key_name}

---

### LoggingBillingAccountBucketConfigConfig <a name="LoggingBillingAccountBucketConfigConfig" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountbucketconfig"

&loggingbillingaccountbucketconfig.LoggingBillingAccountBucketConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingAccount: *string,
	BucketId: *string,
	Location: *string,
	CmekSettings: github.com/cdktf/cdktf-provider-google-go/google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings,
	Description: *string,
	Id: *string,
	RetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#id LoggingBillingAccountBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.billingAccount"></a>

```go
BillingAccount *string
```

- *Type:* *string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#billing_account LoggingBillingAccountBucketConfig#billing_account}

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.bucketId"></a>

```go
BucketId *string
```

- *Type:* *string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#bucket_id LoggingBillingAccountBucketConfig#bucket_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#location LoggingBillingAccountBucketConfig#location}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.cmekSettings"></a>

```go
CmekSettings LoggingBillingAccountBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#cmek_settings LoggingBillingAccountBucketConfig#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#description LoggingBillingAccountBucketConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#id LoggingBillingAccountBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_bucket_config#retention_days LoggingBillingAccountBucketConfig#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingBillingAccountBucketConfigCmekSettingsOutputReference <a name="LoggingBillingAccountBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountbucketconfig"

loggingbillingaccountbucketconfig.NewLoggingBillingAccountBucketConfigCmekSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingBillingAccountBucketConfigCmekSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```go
func KmsKeyVersionName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingBillingAccountBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

---



