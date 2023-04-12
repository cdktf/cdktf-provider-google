# `dialogflowAgent` Submodule <a name="`dialogflowAgent` Submodule" id="@cdktf/provider-google.dialogflowAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowAgent <a name="DialogflowAgent" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent google_dialogflow_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowagent"

dialogflowagent.NewDialogflowAgent(scope Construct, id *string, config DialogflowAgentConfig) DialogflowAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig">DialogflowAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig">DialogflowAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetApiVersion">ResetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetAvatarUri">ResetAvatarUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetClassificationThreshold">ResetClassificationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetMatchMode">ResetMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetSupportedLanguageCodes">ResetSupportedLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowAgentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>

---

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetApiVersion"></a>

```go
func ResetApiVersion()
```

##### `ResetAvatarUri` <a name="ResetAvatarUri" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetAvatarUri"></a>

```go
func ResetAvatarUri()
```

##### `ResetClassificationThreshold` <a name="ResetClassificationThreshold" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetClassificationThreshold"></a>

```go
func ResetClassificationThreshold()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetMatchMode` <a name="ResetMatchMode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetMatchMode"></a>

```go
func ResetMatchMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSupportedLanguageCodes` <a name="ResetSupportedLanguageCodes" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetSupportedLanguageCodes"></a>

```go
func ResetSupportedLanguageCodes()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTier"></a>

```go
func ResetTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowagent"

dialogflowagent.DialogflowAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowagent"

dialogflowagent.DialogflowAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowagent"

dialogflowagent.DialogflowAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriBackend">AvatarUriBackend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference">DialogflowAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriInput">AvatarUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThresholdInput">ClassificationThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCodeInput">DefaultLanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchModeInput">MatchModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodesInput">SupportedLanguageCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUri">AvatarUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThreshold">ClassificationThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchMode">MatchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvatarUriBackend`<sup>Required</sup> <a name="AvatarUriBackend" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriBackend"></a>

```go
func AvatarUriBackend() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeouts"></a>

```go
func Timeouts() DialogflowAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference">DialogflowAgentTimeoutsOutputReference</a>

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `AvatarUriInput`<sup>Optional</sup> <a name="AvatarUriInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriInput"></a>

```go
func AvatarUriInput() *string
```

- *Type:* *string

---

##### `ClassificationThresholdInput`<sup>Optional</sup> <a name="ClassificationThresholdInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThresholdInput"></a>

```go
func ClassificationThresholdInput() *f64
```

- *Type:* *f64

---

##### `DefaultLanguageCodeInput`<sup>Optional</sup> <a name="DefaultLanguageCodeInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCodeInput"></a>

```go
func DefaultLanguageCodeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchModeInput`<sup>Optional</sup> <a name="MatchModeInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchModeInput"></a>

```go
func MatchModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SupportedLanguageCodesInput`<sup>Optional</sup> <a name="SupportedLanguageCodesInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodesInput"></a>

```go
func SupportedLanguageCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `AvatarUri`<sup>Required</sup> <a name="AvatarUri" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUri"></a>

```go
func AvatarUri() *string
```

- *Type:* *string

---

##### `ClassificationThreshold`<sup>Required</sup> <a name="ClassificationThreshold" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThreshold"></a>

```go
func ClassificationThreshold() *f64
```

- *Type:* *f64

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCode"></a>

```go
func DefaultLanguageCode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchMode`<sup>Required</sup> <a name="MatchMode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchMode"></a>

```go
func MatchMode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SupportedLanguageCodes`<sup>Required</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodes"></a>

```go
func SupportedLanguageCodes() *[]*string
```

- *Type:* *[]*string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowAgentConfig <a name="DialogflowAgentConfig" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowagent"

&dialogflowagent.DialogflowAgentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultLanguageCode: *string,
	DisplayName: *string,
	TimeZone: *string,
	ApiVersion: *string,
	AvatarUri: *string,
	ClassificationThreshold: *f64,
	Description: *string,
	EnableLogging: interface{},
	Id: *string,
	MatchMode: *string,
	Project: *string,
	SupportedLanguageCodes: *[]*string,
	Tier: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dialogflowAgent.DialogflowAgentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>*string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The name of this agent. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | API version displayed in Dialogflow console. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.avatarUri">AvatarUri</a></code> | <code>*string</code> | The URI of the agent's avatar, which are used throughout the Dialogflow console. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.classificationThreshold">ClassificationThreshold</a></code> | <code>*f64</code> | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.description">Description</a></code> | <code>*string</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#id DialogflowAgent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.matchMode">MatchMode</a></code> | <code>*string</code> | Determines how intents are detected from user queries. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#project DialogflowAgent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>*[]*string</code> | The list of all languages supported by this agent (except for the defaultLanguageCode). |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.tier">Tier</a></code> | <code>*string</code> | The agent tier. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.defaultLanguageCode"></a>

```go
DefaultLanguageCode *string
```

- *Type:* *string

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#default_language_code DialogflowAgent#default_language_code}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name of this agent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#display_name DialogflowAgent#display_name}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#time_zone DialogflowAgent#time_zone}

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

API version displayed in Dialogflow console.

If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
API_VERSION_V1: Legacy V1 API.
API_VERSION_V2: V2 API.
API_VERSION_V2_BETA_1: V2beta1 API. Possible values: ["API_VERSION_V1", "API_VERSION_V2", "API_VERSION_V2_BETA_1"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#api_version DialogflowAgent#api_version}

---

##### `AvatarUri`<sup>Optional</sup> <a name="AvatarUri" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.avatarUri"></a>

```go
AvatarUri *string
```

- *Type:* *string

The URI of the agent's avatar, which are used throughout the Dialogflow console.

When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#avatar_uri DialogflowAgent#avatar_uri}

---

##### `ClassificationThreshold`<sup>Optional</sup> <a name="ClassificationThreshold" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.classificationThreshold"></a>

```go
ClassificationThreshold *f64
```

- *Type:* *f64

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#classification_threshold DialogflowAgent#classification_threshold}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#description DialogflowAgent#description}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#enable_logging DialogflowAgent#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#id DialogflowAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MatchMode`<sup>Optional</sup> <a name="MatchMode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.matchMode"></a>

```go
MatchMode *string
```

- *Type:* *string

Determines how intents are detected from user queries.

MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities. Possible values: ["MATCH_MODE_HYBRID", "MATCH_MODE_ML_ONLY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#match_mode DialogflowAgent#match_mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#project DialogflowAgent#project}.

---

##### `SupportedLanguageCodes`<sup>Optional</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.supportedLanguageCodes"></a>

```go
SupportedLanguageCodes *[]*string
```

- *Type:* *[]*string

The list of all languages supported by this agent (except for the defaultLanguageCode).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#supported_language_codes DialogflowAgent#supported_language_codes}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The agent tier.

If not specified, TIER_STANDARD is assumed.
TIER_STANDARD: Standard tier.
TIER_ENTERPRISE: Enterprise tier (Essentials).
TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the Terraform state and Dialogflow if the agent tier is changed outside of Terraform. Possible values: ["TIER_STANDARD", "TIER_ENTERPRISE", "TIER_ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#tier DialogflowAgent#tier}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeouts"></a>

```go
Timeouts DialogflowAgentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#timeouts DialogflowAgent#timeouts}

---

### DialogflowAgentTimeouts <a name="DialogflowAgentTimeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowagent"

&dialogflowagent.DialogflowAgentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#create DialogflowAgent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#delete DialogflowAgent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#update DialogflowAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#create DialogflowAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#delete DialogflowAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_agent#update DialogflowAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowAgentTimeoutsOutputReference <a name="DialogflowAgentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowagent"

dialogflowagent.NewDialogflowAgentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowAgentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



