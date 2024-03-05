# `dataGooglePubsubSubscriptionIamPolicy` Submodule <a name="`dataGooglePubsubSubscriptionIamPolicy` Submodule" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePubsubSubscriptionIamPolicy <a name="DataGooglePubsubSubscriptionIamPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy google_pubsub_subscription_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglepubsubsubscriptioniampolicy"

datagooglepubsubsubscriptioniampolicy.NewDataGooglePubsubSubscriptionIamPolicy(scope Construct, id *string, config DataGooglePubsubSubscriptionIamPolicyConfig) DataGooglePubsubSubscriptionIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig">DataGooglePubsubSubscriptionIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig">DataGooglePubsubSubscriptionIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGooglePubsubSubscriptionIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglepubsubsubscriptioniampolicy"

datagooglepubsubsubscriptioniampolicy.DataGooglePubsubSubscriptionIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglepubsubsubscriptioniampolicy"

datagooglepubsubsubscriptioniampolicy.DataGooglePubsubSubscriptionIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglepubsubsubscriptioniampolicy"

datagooglepubsubsubscriptioniampolicy.DataGooglePubsubSubscriptionIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglepubsubsubscriptioniampolicy"

datagooglepubsubsubscriptioniampolicy.DataGooglePubsubSubscriptionIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGooglePubsubSubscriptionIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGooglePubsubSubscriptionIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGooglePubsubSubscriptionIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGooglePubsubSubscriptionIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.subscriptionInput">SubscriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.subscription">Subscription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.subscriptionInput"></a>

```go
func SubscriptionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.subscription"></a>

```go
func Subscription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePubsubSubscriptionIamPolicyConfig <a name="DataGooglePubsubSubscriptionIamPolicyConfig" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglepubsubsubscriptioniampolicy"

&datagooglepubsubsubscriptioniampolicy.DataGooglePubsubSubscriptionIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Subscription: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.subscription">Subscription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy#subscription DataGooglePubsubSubscriptionIamPolicy#subscription}. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy#id DataGooglePubsubSubscriptionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy#project DataGooglePubsubSubscriptionIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.subscription"></a>

```go
Subscription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy#subscription DataGooglePubsubSubscriptionIamPolicy#subscription}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy#id DataGooglePubsubSubscriptionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePubsubSubscriptionIamPolicy.DataGooglePubsubSubscriptionIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/data-sources/pubsub_subscription_iam_policy#project DataGooglePubsubSubscriptionIamPolicy#project}.

---



