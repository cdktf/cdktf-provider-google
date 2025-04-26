# `dataGoogleIapWebBackendServiceIamPolicy` Submodule <a name="`dataGoogleIapWebBackendServiceIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapWebBackendServiceIamPolicy <a name="DataGoogleIapWebBackendServiceIamPolicy" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy google_iap_web_backend_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleiapwebbackendserviceiampolicy"

datagoogleiapwebbackendserviceiampolicy.NewDataGoogleIapWebBackendServiceIamPolicy(scope Construct, id *string, config DataGoogleIapWebBackendServiceIamPolicyConfig) DataGoogleIapWebBackendServiceIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig">DataGoogleIapWebBackendServiceIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig">DataGoogleIapWebBackendServiceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIapWebBackendServiceIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleiapwebbackendserviceiampolicy"

datagoogleiapwebbackendserviceiampolicy.DataGoogleIapWebBackendServiceIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleiapwebbackendserviceiampolicy"

datagoogleiapwebbackendserviceiampolicy.DataGoogleIapWebBackendServiceIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleiapwebbackendserviceiampolicy"

datagoogleiapwebbackendserviceiampolicy.DataGoogleIapWebBackendServiceIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleiapwebbackendserviceiampolicy"

datagoogleiapwebbackendserviceiampolicy.DataGoogleIapWebBackendServiceIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleIapWebBackendServiceIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleIapWebBackendServiceIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleIapWebBackendServiceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIapWebBackendServiceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.webBackendServiceInput">WebBackendServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.webBackendService">WebBackendService</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `WebBackendServiceInput`<sup>Optional</sup> <a name="WebBackendServiceInput" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.webBackendServiceInput"></a>

```go
func WebBackendServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WebBackendService`<sup>Required</sup> <a name="WebBackendService" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.webBackendService"></a>

```go
func WebBackendService() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapWebBackendServiceIamPolicyConfig <a name="DataGoogleIapWebBackendServiceIamPolicyConfig" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleiapwebbackendserviceiampolicy"

&datagoogleiapwebbackendserviceiampolicy.DataGoogleIapWebBackendServiceIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WebBackendService: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.webBackendService">WebBackendService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy#web_backend_service DataGoogleIapWebBackendServiceIamPolicy#web_backend_service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy#id DataGoogleIapWebBackendServiceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy#project DataGoogleIapWebBackendServiceIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WebBackendService`<sup>Required</sup> <a name="WebBackendService" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.webBackendService"></a>

```go
WebBackendService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy#web_backend_service DataGoogleIapWebBackendServiceIamPolicy#web_backend_service}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy#id DataGoogleIapWebBackendServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIapWebBackendServiceIamPolicy.DataGoogleIapWebBackendServiceIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/iap_web_backend_service_iam_policy#project DataGoogleIapWebBackendServiceIamPolicy#project}.

---



