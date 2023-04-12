# `recaptchaEnterpriseKey` Submodule <a name="`recaptchaEnterpriseKey` Submodule" id="@cdktf/provider-google.recaptchaEnterpriseKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecaptchaEnterpriseKey <a name="RecaptchaEnterpriseKey" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key google_recaptcha_enterprise_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.NewRecaptchaEnterpriseKey(scope Construct, id *string, config RecaptchaEnterpriseKeyConfig) RecaptchaEnterpriseKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig">RecaptchaEnterpriseKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig">RecaptchaEnterpriseKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings">PutAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings">PutIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions">PutTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings">PutWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings">ResetAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings">ResetIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions">ResetTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings">ResetWebSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAndroidSettings` <a name="PutAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings"></a>

```go
func PutAndroidSettings(value RecaptchaEnterpriseKeyAndroidSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `PutIosSettings` <a name="PutIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings"></a>

```go
func PutIosSettings(value RecaptchaEnterpriseKeyIosSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `PutTestingOptions` <a name="PutTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions"></a>

```go
func PutTestingOptions(value RecaptchaEnterpriseKeyTestingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts"></a>

```go
func PutTimeouts(value RecaptchaEnterpriseKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---

##### `PutWebSettings` <a name="PutWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings"></a>

```go
func PutWebSettings(value RecaptchaEnterpriseKeyWebSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `ResetAndroidSettings` <a name="ResetAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings"></a>

```go
func ResetAndroidSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId"></a>

```go
func ResetId()
```

##### `ResetIosSettings` <a name="ResetIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings"></a>

```go
func ResetIosSettings()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTestingOptions` <a name="ResetTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions"></a>

```go
func ResetTestingOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWebSettings` <a name="ResetWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings"></a>

```go
func ResetWebSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.RecaptchaEnterpriseKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.RecaptchaEnterpriseKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.RecaptchaEnterpriseKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings">AndroidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings">IosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions">TestingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings">WebSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput">AndroidSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput">IosSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput">TestingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput">WebSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AndroidSettings`<sup>Required</sup> <a name="AndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings"></a>

```go
func AndroidSettings() RecaptchaEnterpriseKeyAndroidSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `IosSettings`<sup>Required</sup> <a name="IosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings"></a>

```go
func IosSettings() RecaptchaEnterpriseKeyIosSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TestingOptions`<sup>Required</sup> <a name="TestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions"></a>

```go
func TestingOptions() RecaptchaEnterpriseKeyTestingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts"></a>

```go
func Timeouts() RecaptchaEnterpriseKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a>

---

##### `WebSettings`<sup>Required</sup> <a name="WebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings"></a>

```go
func WebSettings() RecaptchaEnterpriseKeyWebSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a>

---

##### `AndroidSettingsInput`<sup>Optional</sup> <a name="AndroidSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput"></a>

```go
func AndroidSettingsInput() RecaptchaEnterpriseKeyAndroidSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IosSettingsInput`<sup>Optional</sup> <a name="IosSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput"></a>

```go
func IosSettingsInput() RecaptchaEnterpriseKeyIosSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TestingOptionsInput`<sup>Optional</sup> <a name="TestingOptionsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput"></a>

```go
func TestingOptionsInput() RecaptchaEnterpriseKeyTestingOptions
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebSettingsInput`<sup>Optional</sup> <a name="WebSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput"></a>

```go
func WebSettingsInput() RecaptchaEnterpriseKeyWebSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RecaptchaEnterpriseKeyAndroidSettings <a name="RecaptchaEnterpriseKeyAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

&recaptchaenterprisekey.RecaptchaEnterpriseKeyAndroidSettings {
	AllowAllPackageNames: interface{},
	AllowedPackageNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames">AllowAllPackageNames</a></code> | <code>interface{}</code> | If set to true, it means allowed_package_names will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames">AllowedPackageNames</a></code> | <code>*[]*string</code> | Android package names of apps allowed to use the key. Example: 'com.companyname.appname'. |

---

##### `AllowAllPackageNames`<sup>Optional</sup> <a name="AllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames"></a>

```go
AllowAllPackageNames interface{}
```

- *Type:* interface{}

If set to true, it means allowed_package_names will not be enforced.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_all_package_names RecaptchaEnterpriseKey#allow_all_package_names}

---

##### `AllowedPackageNames`<sup>Optional</sup> <a name="AllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames"></a>

```go
AllowedPackageNames *[]*string
```

- *Type:* *[]*string

Android package names of apps allowed to use the key. Example: 'com.companyname.appname'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allowed_package_names RecaptchaEnterpriseKey#allowed_package_names}

---

### RecaptchaEnterpriseKeyConfig <a name="RecaptchaEnterpriseKeyConfig" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

&recaptchaenterprisekey.RecaptchaEnterpriseKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	AndroidSettings: github.com/cdktf/cdktf-provider-google-go/google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings,
	Id: *string,
	IosSettings: github.com/cdktf/cdktf-provider-google-go/google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings,
	Labels: *map[string]*string,
	Project: *string,
	TestingOptions: github.com/cdktf/cdktf-provider-google-go/google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts,
	WebSettings: github.com/cdktf/cdktf-provider-google-go/google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings">AndroidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings">IosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions">TestingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings">WebSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#display_name RecaptchaEnterpriseKey#display_name}

---

##### `AndroidSettings`<sup>Optional</sup> <a name="AndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings"></a>

```go
AndroidSettings RecaptchaEnterpriseKeyAndroidSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#android_settings RecaptchaEnterpriseKey#android_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IosSettings`<sup>Optional</sup> <a name="IosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings"></a>

```go
IosSettings RecaptchaEnterpriseKeyIosSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#ios_settings RecaptchaEnterpriseKey#ios_settings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#labels RecaptchaEnterpriseKey#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#project RecaptchaEnterpriseKey#project}

---

##### `TestingOptions`<sup>Optional</sup> <a name="TestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions"></a>

```go
TestingOptions RecaptchaEnterpriseKeyTestingOptions
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#testing_options RecaptchaEnterpriseKey#testing_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts"></a>

```go
Timeouts RecaptchaEnterpriseKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#timeouts RecaptchaEnterpriseKey#timeouts}

---

##### `WebSettings`<sup>Optional</sup> <a name="WebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings"></a>

```go
WebSettings RecaptchaEnterpriseKeyWebSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#web_settings RecaptchaEnterpriseKey#web_settings}

---

### RecaptchaEnterpriseKeyIosSettings <a name="RecaptchaEnterpriseKeyIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

&recaptchaenterprisekey.RecaptchaEnterpriseKeyIosSettings {
	AllowAllBundleIds: interface{},
	AllowedBundleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds">AllowAllBundleIds</a></code> | <code>interface{}</code> | If set to true, it means allowed_bundle_ids will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>*[]*string</code> | iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'. |

---

##### `AllowAllBundleIds`<sup>Optional</sup> <a name="AllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds"></a>

```go
AllowAllBundleIds interface{}
```

- *Type:* interface{}

If set to true, it means allowed_bundle_ids will not be enforced.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_all_bundle_ids RecaptchaEnterpriseKey#allow_all_bundle_ids}

---

##### `AllowedBundleIds`<sup>Optional</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds"></a>

```go
AllowedBundleIds *[]*string
```

- *Type:* *[]*string

iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allowed_bundle_ids RecaptchaEnterpriseKey#allowed_bundle_ids}

---

### RecaptchaEnterpriseKeyTestingOptions <a name="RecaptchaEnterpriseKeyTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

&recaptchaenterprisekey.RecaptchaEnterpriseKeyTestingOptions {
	TestingChallenge: *string,
	TestingScore: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge">TestingChallenge</a></code> | <code>*string</code> | For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore">TestingScore</a></code> | <code>*f64</code> | All assessments for this Key will return this score. |

---

##### `TestingChallenge`<sup>Optional</sup> <a name="TestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge"></a>

```go
TestingChallenge *string
```

- *Type:* *string

For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE.

Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#testing_challenge RecaptchaEnterpriseKey#testing_challenge}

---

##### `TestingScore`<sup>Optional</sup> <a name="TestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore"></a>

```go
TestingScore *f64
```

- *Type:* *f64

All assessments for this Key will return this score.

Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#testing_score RecaptchaEnterpriseKey#testing_score}

---

### RecaptchaEnterpriseKeyTimeouts <a name="RecaptchaEnterpriseKeyTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

&recaptchaenterprisekey.RecaptchaEnterpriseKeyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}.

---

### RecaptchaEnterpriseKeyWebSettings <a name="RecaptchaEnterpriseKeyWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

&recaptchaenterprisekey.RecaptchaEnterpriseKeyWebSettings {
	IntegrationType: *string,
	AllowAllDomains: interface{},
	AllowAmpTraffic: interface{},
	AllowedDomains: *[]*string,
	ChallengeSecurityPreference: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType">IntegrationType</a></code> | <code>*string</code> | Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains">AllowAllDomains</a></code> | <code>interface{}</code> | If set to true, it means allowed_domains will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic">AllowAmpTraffic</a></code> | <code>interface{}</code> | If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | Domains or subdomains of websites allowed to use the key. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference">ChallengeSecurityPreference</a></code> | <code>*string</code> | Settings for the frequency and difficulty at which this key triggers captcha challenges. |

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType"></a>

```go
IntegrationType *string
```

- *Type:* *string

Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#integration_type RecaptchaEnterpriseKey#integration_type}

---

##### `AllowAllDomains`<sup>Optional</sup> <a name="AllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains"></a>

```go
AllowAllDomains interface{}
```

- *Type:* interface{}

If set to true, it means allowed_domains will not be enforced.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_all_domains RecaptchaEnterpriseKey#allow_all_domains}

---

##### `AllowAmpTraffic`<sup>Optional</sup> <a name="AllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic"></a>

```go
AllowAmpTraffic interface{}
```

- *Type:* interface{}

If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites.

This is supported only for the SCORE integration type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_amp_traffic RecaptchaEnterpriseKey#allow_amp_traffic}

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains"></a>

```go
AllowedDomains *[]*string
```

- *Type:* *[]*string

Domains or subdomains of websites allowed to use the key.

All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allowed_domains RecaptchaEnterpriseKey#allowed_domains}

---

##### `ChallengeSecurityPreference`<sup>Optional</sup> <a name="ChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference"></a>

```go
ChallengeSecurityPreference *string
```

- *Type:* *string

Settings for the frequency and difficulty at which this key triggers captcha challenges.

This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#challenge_security_preference RecaptchaEnterpriseKey#challenge_security_preference}

---

## Classes <a name="Classes" id="Classes"></a>

### RecaptchaEnterpriseKeyAndroidSettingsOutputReference <a name="RecaptchaEnterpriseKeyAndroidSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.NewRecaptchaEnterpriseKeyAndroidSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecaptchaEnterpriseKeyAndroidSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames">ResetAllowAllPackageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames">ResetAllowedPackageNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllPackageNames` <a name="ResetAllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames"></a>

```go
func ResetAllowAllPackageNames()
```

##### `ResetAllowedPackageNames` <a name="ResetAllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames"></a>

```go
func ResetAllowedPackageNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput">AllowAllPackageNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput">AllowedPackageNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames">AllowAllPackageNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames">AllowedPackageNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAllPackageNamesInput`<sup>Optional</sup> <a name="AllowAllPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput"></a>

```go
func AllowAllPackageNamesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedPackageNamesInput`<sup>Optional</sup> <a name="AllowedPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput"></a>

```go
func AllowedPackageNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowAllPackageNames`<sup>Required</sup> <a name="AllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames"></a>

```go
func AllowAllPackageNames() interface{}
```

- *Type:* interface{}

---

##### `AllowedPackageNames`<sup>Required</sup> <a name="AllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames"></a>

```go
func AllowedPackageNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() RecaptchaEnterpriseKeyAndroidSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---


### RecaptchaEnterpriseKeyIosSettingsOutputReference <a name="RecaptchaEnterpriseKeyIosSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.NewRecaptchaEnterpriseKeyIosSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecaptchaEnterpriseKeyIosSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds">ResetAllowAllBundleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds">ResetAllowedBundleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllBundleIds` <a name="ResetAllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds"></a>

```go
func ResetAllowAllBundleIds()
```

##### `ResetAllowedBundleIds` <a name="ResetAllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds"></a>

```go
func ResetAllowedBundleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput">AllowAllBundleIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput">AllowedBundleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds">AllowAllBundleIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAllBundleIdsInput`<sup>Optional</sup> <a name="AllowAllBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput"></a>

```go
func AllowAllBundleIdsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedBundleIdsInput`<sup>Optional</sup> <a name="AllowedBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput"></a>

```go
func AllowedBundleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowAllBundleIds`<sup>Required</sup> <a name="AllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds"></a>

```go
func AllowAllBundleIds() interface{}
```

- *Type:* interface{}

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds"></a>

```go
func AllowedBundleIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() RecaptchaEnterpriseKeyIosSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---


### RecaptchaEnterpriseKeyTestingOptionsOutputReference <a name="RecaptchaEnterpriseKeyTestingOptionsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.NewRecaptchaEnterpriseKeyTestingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecaptchaEnterpriseKeyTestingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge">ResetTestingChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore">ResetTestingScore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestingChallenge` <a name="ResetTestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge"></a>

```go
func ResetTestingChallenge()
```

##### `ResetTestingScore` <a name="ResetTestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore"></a>

```go
func ResetTestingScore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput">TestingChallengeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput">TestingScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge">TestingChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore">TestingScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TestingChallengeInput`<sup>Optional</sup> <a name="TestingChallengeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput"></a>

```go
func TestingChallengeInput() *string
```

- *Type:* *string

---

##### `TestingScoreInput`<sup>Optional</sup> <a name="TestingScoreInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput"></a>

```go
func TestingScoreInput() *f64
```

- *Type:* *f64

---

##### `TestingChallenge`<sup>Required</sup> <a name="TestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge"></a>

```go
func TestingChallenge() *string
```

- *Type:* *string

---

##### `TestingScore`<sup>Required</sup> <a name="TestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore"></a>

```go
func TestingScore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() RecaptchaEnterpriseKeyTestingOptions
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---


### RecaptchaEnterpriseKeyTimeoutsOutputReference <a name="RecaptchaEnterpriseKeyTimeoutsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.NewRecaptchaEnterpriseKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecaptchaEnterpriseKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RecaptchaEnterpriseKeyWebSettingsOutputReference <a name="RecaptchaEnterpriseKeyWebSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/recaptchaenterprisekey"

recaptchaenterprisekey.NewRecaptchaEnterpriseKeyWebSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecaptchaEnterpriseKeyWebSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains">ResetAllowAllDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic">ResetAllowAmpTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference">ResetChallengeSecurityPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllDomains` <a name="ResetAllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains"></a>

```go
func ResetAllowAllDomains()
```

##### `ResetAllowAmpTraffic` <a name="ResetAllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic"></a>

```go
func ResetAllowAmpTraffic()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains"></a>

```go
func ResetAllowedDomains()
```

##### `ResetChallengeSecurityPreference` <a name="ResetChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference"></a>

```go
func ResetChallengeSecurityPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput">AllowAllDomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput">AllowAmpTrafficInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput">ChallengeSecurityPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains">AllowAllDomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic">AllowAmpTraffic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference">ChallengeSecurityPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType">IntegrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAllDomainsInput`<sup>Optional</sup> <a name="AllowAllDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput"></a>

```go
func AllowAllDomainsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAmpTrafficInput`<sup>Optional</sup> <a name="AllowAmpTrafficInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput"></a>

```go
func AllowAmpTrafficInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput"></a>

```go
func AllowedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChallengeSecurityPreferenceInput`<sup>Optional</sup> <a name="ChallengeSecurityPreferenceInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput"></a>

```go
func ChallengeSecurityPreferenceInput() *string
```

- *Type:* *string

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput"></a>

```go
func IntegrationTypeInput() *string
```

- *Type:* *string

---

##### `AllowAllDomains`<sup>Required</sup> <a name="AllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains"></a>

```go
func AllowAllDomains() interface{}
```

- *Type:* interface{}

---

##### `AllowAmpTraffic`<sup>Required</sup> <a name="AllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic"></a>

```go
func AllowAmpTraffic() interface{}
```

- *Type:* interface{}

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains"></a>

```go
func AllowedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `ChallengeSecurityPreference`<sup>Required</sup> <a name="ChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference"></a>

```go
func ChallengeSecurityPreference() *string
```

- *Type:* *string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType"></a>

```go
func IntegrationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() RecaptchaEnterpriseKeyWebSettings
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---



