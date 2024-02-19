# `dataGoogleHealthcareConsentStoreIamPolicy` Submodule <a name="`dataGoogleHealthcareConsentStoreIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleHealthcareConsentStoreIamPolicy <a name="DataGoogleHealthcareConsentStoreIamPolicy" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy google_healthcare_consent_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglehealthcareconsentstoreiampolicy"

datagooglehealthcareconsentstoreiampolicy.NewDataGoogleHealthcareConsentStoreIamPolicy(scope Construct, id *string, config DataGoogleHealthcareConsentStoreIamPolicyConfig) DataGoogleHealthcareConsentStoreIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig">DataGoogleHealthcareConsentStoreIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig">DataGoogleHealthcareConsentStoreIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleHealthcareConsentStoreIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglehealthcareconsentstoreiampolicy"

datagooglehealthcareconsentstoreiampolicy.DataGoogleHealthcareConsentStoreIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglehealthcareconsentstoreiampolicy"

datagooglehealthcareconsentstoreiampolicy.DataGoogleHealthcareConsentStoreIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglehealthcareconsentstoreiampolicy"

datagooglehealthcareconsentstoreiampolicy.DataGoogleHealthcareConsentStoreIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglehealthcareconsentstoreiampolicy"

datagooglehealthcareconsentstoreiampolicy.DataGoogleHealthcareConsentStoreIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleHealthcareConsentStoreIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleHealthcareConsentStoreIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleHealthcareConsentStoreIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleHealthcareConsentStoreIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreIdInput">ConsentStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `ConsentStoreIdInput`<sup>Optional</sup> <a name="ConsentStoreIdInput" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreIdInput"></a>

```go
func ConsentStoreIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreId"></a>

```go
func ConsentStoreId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleHealthcareConsentStoreIamPolicyConfig <a name="DataGoogleHealthcareConsentStoreIamPolicyConfig" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglehealthcareconsentstoreiampolicy"

&datagooglehealthcareconsentstoreiampolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsentStoreId: *string,
	Dataset: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy#consent_store_id DataGoogleHealthcareConsentStoreIamPolicy#consent_store_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dataset">Dataset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy#dataset DataGoogleHealthcareConsentStoreIamPolicy#dataset}. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy#id DataGoogleHealthcareConsentStoreIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.consentStoreId"></a>

```go
ConsentStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy#consent_store_id DataGoogleHealthcareConsentStoreIamPolicy#consent_store_id}.

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy#dataset DataGoogleHealthcareConsentStoreIamPolicy#dataset}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/healthcare_consent_store_iam_policy#id DataGoogleHealthcareConsentStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



